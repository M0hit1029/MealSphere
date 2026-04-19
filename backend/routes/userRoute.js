const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const moment = require("moment-timezone");
const userRouter = express.Router();
const userModel = require("../models/userSchema");
const reservationModel = require("../models/reservationSchema");
const enrollmentSchema = require("../models/enrollmentSchema");
const dotenv = require("dotenv");
const reservationAuth = require("../middlewares/reservationAuth");
const userAuth = require("../middlewares/userAuth");
const messModel = require("../models/messSchema");
const mealLedgerModel = require("../models/mealLedgerSchema");
const {
  upsertMealLedgerEntry,
  markMealLedgerCancelled,
} = require("../utils/mealLedger");
dotenv.config();

// Live count from reservations — same logic as messRouter, kept in sync.
const getLiveBookingCount = async (messId, mealType) => {
  const todayStart = moment().tz("Asia/Kolkata").startOf("day").toDate();
  return reservationModel.countDocuments({
    messId,
    mealType: mealType === "day" ? { $in: ["day", "both"] } : { $in: ["night", "both"] },
    date: todayStart,
  });
};

const getMealCapacityLimit = (mess, mealType) => {
  const rawLimit = mealType === "day" ? mess?.capacity?.day?.limit : mess?.capacity?.night?.limit;
  if (rawLimit === null || rawLimit === undefined || rawLimit === "") return null;
  const limit = Number(rawLimit);
  return Number.isFinite(limit) && limit > 0 ? limit : null;
};

userRouter.post("/signup", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const checkUser = await userModel.findOne({ email });
    if (checkUser) return res.status(400).json({ message: "User already exists" });

    const user = await userModel.create({ name, email, password, phone });
    const token = jwt.sign({ id: user._id }, process.env.USER_JWT_SECRET);

    res.cookie("userToken", token, {
      httpOnly: true, secure: true, sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "User does not exist" });

    const isMatch = await user.comparePassword(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.USER_JWT_SECRET);

    res.cookie("userToken", token, {
      httpOnly: true, secure: true, sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

userRouter.post("/logout", (req, res) => {
  res.clearCookie("userToken", { httpOnly: true, secure: true, sameSite: "None" });
  res.json({ message: "Logged out successfully" });
});

userRouter.get("/auth/me", async (req, res) => {
  try {
    const token = req.cookies.userToken;
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    const decoded = jwt.verify(token, process.env.USER_JWT_SECRET);
    if (!decoded) return res.status(403).json({ message: "Invalid token" });
    return res.status(200).json({ message: "Authorized" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

userRouter.post("/reserve", [userAuth, reservationAuth], async (req, res) => {
  try {
    const { messId, mealType } = req.body;
    if (!messId || !mealType) {
      return res.status(400).json({ message: "messId and mealType are required" });
    }

    const user = await userModel.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const mess = await messModel.findById(messId);
    if (!mess) return res.status(404).json({ message: "Mess not found" });

    // Live capacity check — replaces the old stored-counter check
    const capacityLimit = getMealCapacityLimit(mess, mealType);
    if (capacityLimit !== null) {
      const liveCount = await getLiveBookingCount(messId, mealType);
      if (liveCount >= capacityLimit) {
        return res.status(409).json({
          message: "Mess Full",
          capacity: capacityLimit,
          booked: liveCount,
          mealType,
        });
      }
    }

    if (user.role !== "daily") {
      return res.status(403).json({ message: "Only daily users can reserve a mess" });
    }

    const startOfDayIST = moment().tz("Asia/Kolkata").startOf("day").toDate();
    const endOfDayIST = moment().tz("Asia/Kolkata").endOf("day").toDate();

    const existingReservationToday = await reservationModel.findOne({
      userId: req.userId,
      messId,
      mealType,
      date: { $gte: startOfDayIST, $lte: endOfDayIST },
    });
    if (existingReservationToday) {
      return res.status(400).json({
        message: `You already have a ${mealType} reservation in this mess`,
      });
    }

    const enrolled = await enrollmentSchema.findOne({ userId: req.userId, isAccepted: true });

    if (enrolled && enrolled.messId.toString() !== messId) {
      const existing = await reservationModel.findOne({
        userId: req.userId,
        messId: enrolled.messId,
        date: { $gte: startOfDayIST, $lte: endOfDayIST },
      });
      if (existing && existing.mealType === mealType) {
        return res.status(400).json({
          message: `You already have a ${mealType} reservation in your enrolled mess`,
        });
      }

      const absenteeMess = await messModel.findById(enrolled.messId);
      if (absenteeMess) {
        if (mealType === "day") absenteeMess.absentTodayDay = (absenteeMess.absentTodayDay || 0) + 1;
        else absenteeMess.absentTodayNight = (absenteeMess.absentTodayNight || 0) + 1;
        await absenteeMess.save();
      }
    }

    const reservation = await reservationModel.create({
      userId: req.userId,
      messId,
      mealType,
      date: startOfDayIST,
    });

    // Re-sync stored counter from live count after save
    const liveCountAfter = await getLiveBookingCount(messId, mealType);
    if (mealType === "day") mess.attendingTodayDay = liveCountAfter;
    else mess.attendingTodayNight = liveCountAfter;
    await mess.save();

    await upsertMealLedgerEntry({
      userId: req.userId,
      mess,
      date: startOfDayIST,
      mealType,
      reservationStatus: "reserved",
      attendanceStatus: "not_marked",
      source: "daily_reservation",
    });

    res.status(200).json({ message: "Mess reserved successfully", reservation });
  } catch (error) {
    console.error("Error reserving mess:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

userRouter.get("/reservations/today", [userAuth], async (req, res) => {
  try {
    const userId = req.userId;
    const startOfDayIST = moment().tz("Asia/Kolkata").startOf("day").toDate();
    const endOfDayIST = moment().tz("Asia/Kolkata").endOf("day").toDate();

    const reservations = await reservationModel
      .find({ userId, date: { $gte: startOfDayIST, $lte: endOfDayIST } })
      .populate("messId", "name address menu");

    if (!reservations || reservations.length === 0) {
      return res.status(200).json({ message: "No reservations found for today", reservations: [] });
    }

    const formattedReservations = reservations.map((reservation) => ({
      reservationId: reservation._id,
      messName: reservation.messId.name,
      address: reservation.messId.address,
      menu: reservation.messId.menu || "Not available",
      mealType: reservation.mealType,
    }));

    res.status(200).json({ message: "Reservations fetched successfully", reservations: formattedReservations });
  } catch (error) {
    console.error("Error fetching reservations:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

userRouter.delete("/reservations/cancel/:reservationId", [userAuth], async (req, res) => {
  try {
    const { reservationId } = req.params;
    const userId = req.userId;

    if (!reservationId) return res.status(400).json({ message: "Reservation ID is required" });

    const reservation = await reservationModel.findOne({ _id: reservationId, userId });
    if (!reservation) return res.status(404).json({ message: "Reservation not found or not owned by user" });

    const startOfDayIST = moment().tz("Asia/Kolkata").startOf("day").toDate();
    const reservationDate = moment(reservation.date).tz("Asia/Kolkata").startOf("day").toDate();

    if (reservationDate.getTime() !== startOfDayIST.getTime()) {
      return res.status(403).json({ message: "Can only cancel today's reservations" });
    }

    await reservationModel.deleteOne({ _id: reservationId });

    // Re-sync stored counters from live count after deletion
    const mess = await messModel.findById(reservation.messId);
    if (mess) {
      if (reservation.mealType === "both" || reservation.mealType === "day") {
        mess.attendingTodayDay = await getLiveBookingCount(reservation.messId, "day");
      }
      if (reservation.mealType === "both" || reservation.mealType === "night") {
        mess.attendingTodayNight = await getLiveBookingCount(reservation.messId, "night");
      }
      await mess.save();
    }

    if (reservation.mealType === "both") {
      await Promise.all([
        markMealLedgerCancelled({ userId, messId: reservation.messId, date: reservationDate, mealType: "day" }),
        markMealLedgerCancelled({ userId, messId: reservation.messId, date: reservationDate, mealType: "night" }),
      ]);
    } else {
      await markMealLedgerCancelled({ userId, messId: reservation.messId, date: reservationDate, mealType: reservation.mealType });
    }

    res.status(200).json({ message: "Reservation cancelled successfully", reservationId });
  } catch (error) {
    console.error("Error cancelling reservation:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

userRouter.get("/meal-ledger", [userAuth], async (req, res) => {
  try {
    const userId = req.userId;
    const allowedDays = [7, 30, 90];
    const requestedDays = Number(req.query.days) || 30;
    const days = allowedDays.includes(requestedDays) ? requestedDays : 30;

    const rangeStart = moment().tz("Asia/Kolkata").startOf("day").subtract(days - 1, "days").toDate();

    const entries = await mealLedgerModel
      .find({ userId, date: { $gte: rangeStart } })
      .sort({ date: -1, createdAt: -1 })
      .lean();

    const activeEntries = entries.filter((e) => e.reservationStatus !== "cancelled");
    const totalSpend = activeEntries.reduce((sum, e) => sum + Number(e.totalPrice || 0), 0);
    const averageMealCost = activeEntries.length > 0
      ? Number((totalSpend / activeEntries.length).toFixed(2))
      : 0;

    const monthStart = moment().tz("Asia/Kolkata").startOf("month").toDate();
    const monthEnd = moment().tz("Asia/Kolkata").endOf("month").toDate();

    const monthlyEntries = await mealLedgerModel.find({
      userId,
      date: { $gte: monthStart, $lte: monthEnd },
      reservationStatus: { $ne: "cancelled" },
    }).lean();

    const monthlySpend = monthlyEntries.reduce((sum, e) => sum + Number(e.totalPrice || 0), 0);
    const monthlyAverageMealCost = monthlyEntries.length > 0
      ? Number((monthlySpend / monthlyEntries.length).toFixed(2))
      : 0;

    const dishFrequency = {};
    monthlyEntries.forEach((e) => {
      (e.dishNames || []).forEach((dish) => {
        if (!dish) return;
        dishFrequency[dish] = (dishFrequency[dish] || 0) + 1;
      });
    });

    const mostEatenDish = Object.keys(dishFrequency).length > 0
      ? Object.entries(dishFrequency).sort((a, b) => b[1] - a[1])[0][0]
      : null;

    res.status(200).json({
      days,
      entries: entries.map((e) => ({
        id: e._id,
        date: e.date,
        messName: e.messName,
        mealType: e.mealType,
        dishNames: e.dishNames || [],
        totalPrice: Number(e.totalPrice || 0),
        reservationStatus: e.reservationStatus,
        attendanceStatus: e.attendanceStatus,
        source: e.source,
      })),
      summary: { totalMeals: entries.length, totalSpend, averageMealCost },
      monthlyInsights: {
        month: moment().tz("Asia/Kolkata").format("MMMM YYYY"),
        mostEatenDish,
        averageMealCost: monthlyAverageMealCost,
      },
    });
  } catch (error) {
    console.error("Error fetching meal ledger:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

userRouter.get("/profile", [userAuth], async (req, res) => {
  try {
    const user = await userModel.findById(req.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

userRouter.put("/profile/update", [userAuth], async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const user = await userModel.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    await user.save();

    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

userRouter.delete("/profile/delete", [userAuth], async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "Profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = userRouter;