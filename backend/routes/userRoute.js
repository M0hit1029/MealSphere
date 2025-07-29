const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const userRouter = express.Router();
const userModel = require("../models/userSchema");
const reservationModel = require("../models/reservationSchema");
const enrollmentSchema = require("../models/enrollmentSchema");
const dotenv = require("dotenv");
const reservationAuth = require("../middlewares/reservationAuth");
const userAuth = require("../middlewares/userAuth");
const messModel = require("../models/messSchema");
dotenv.config();

app.use(express.json());

userRouter.post("/signup", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const checkUser = await userModel.findOne({ email: email });
    if (checkUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await userModel.create({ name, email, password, phone });
    const token = jwt.sign({ id: user._id }, process.env.USER_JWT_SECRET);

    res.cookie("userToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
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
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const isMatch = await user.comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.USER_JWT_SECRET);

    res.cookie("userToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ message: "Login successful", token: token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

userRouter.post("/logout", (req, res) => {
  res.clearCookie("userToken");
  res.json({ message: "Logged out successfully" });
});

userRouter.get("/auth/me", async (req, res) => {
  try {
    const token = req.cookies.userToken;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.USER_JWT_SECRET);
    if (!decoded) {
      return res.status(403).json({ message: "Invalid token" });
    } else {
      return res.status(200).json({ message: "Authorized" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

userRouter.post("/reserve", [userAuth, reservationAuth], async (req, res) => {
  try {
    const { messId, mealType } = req.body;

    if (!messId || !mealType) {
      return res
        .status(400)
        .json({ message: "messId and mealType are required" });
    }

    const user = await userModel.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const mess = await messModel.findById(messId);
    if (!mess) return res.status(404).json({ message: "Mess not found" });

    if (user.role !== "daily") {
      return res
        .status(403)
        .json({ message: "Only daily users can reserve a mess" });
    }

    const now = new Date();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const enrolled = await enrollmentSchema.findOne({
      userId: req.userId,
      isAccepted: true,
    });
    if (enrolled && enrolled.messId.toString() !== messId) {
      // Check if already booked in enrolled mess
      const existing = await reservationModel.findOne({
        userId: req.userId,
        messId: enrolled.messId,
        date: today,
      });
      if (existing && existing.mealType === mealType) {
        return res.status(400).json({
          message: `You already have a ${mealType} reservation in your enrolled mess`,
        });
      }

      // Update absentee mess counts
      const absenteeMess = await messModel.findById(enrolled.messId);
      if (mealType === "day") {
        absenteeMess.absentTodayDay = (absenteeMess.absentTodayDay || 0) + 1;
      } else {
        absenteeMess.absentTodayNight =
          (absenteeMess.absentTodayNight || 0) + 1;
      }
      await absenteeMess.save();

      // Update absentee in enrollment.attendance
      const attendanceToday = enrolled.attendance.find(
        (a) => new Date(a.date).toDateString() === today.toDateString()
      );

      if (attendanceToday) {
        if (mealType === "day") attendanceToday.attendedDay = false;
        else attendanceToday.attendedNight = false;
      } else {
        enrolled.attendance.push({
          date: today,
          attendedDay: mealType === "day" ? false : null,
          attendedNight: mealType === "night" ? false : null,
        });
      }

      await enrolled.save();
    }

    // Reserve current mess
    if (mealType === "day") {
      mess.attendingTodayDay += 1;
    } else {
      mess.attendingTodayNight += 1;
    }
    await mess.save();

    const reservation = await reservationModel.create({
      userId: req.userId,
      messId,
      mealType,
      date: today,
    });
    res.status(200).json({
      message: "Mess reserved successfully",
      reservation,
    });
  } catch (error) {
    console.error("Error reserving mess:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Fetch today's reservations
userRouter.get("/reservations/today", [userAuth], async (req, res) => {
  try {
    const userId = req.userId;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const reservations = await reservationModel
      .find({
        userId,
        date: {
          $gte: today,
          $lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
        },
      })
      .populate("messId", "name address menu");

    if (!reservations || reservations.length === 0) {
      return res.status(200).json({
        message: "No reservations found for today",
        reservations: [],
      });
    }

    const formattedReservations = reservations.map((reservation) => ({
      reservationId: reservation._id,
      messName: reservation.messId.name,
      address: reservation.messId.address,
      menu: reservation.messId.menu || "Not available",
      mealType: reservation.mealType,
    }));

    res.status(200).json({
      message: "Reservations fetched successfully",
      reservations: formattedReservations,
    });
  } catch (error) {
    console.error("Error fetching reservations:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Cancel a reservation
userRouter.delete(
  "/reservations/cancel/:reservationId",
  [userAuth],
  async (req, res) => {
    try {
      const { reservationId } = req.params;
      const userId = req.userId;

      if (!reservationId) {
        return res.status(400).json({ message: "Reservation ID is required" });
      }

      const reservation = await reservationModel.findOne({
        _id: reservationId,
        userId,
      });

      if (!reservation) {
        return res
          .status(404)
          .json({ message: "Reservation not found or not owned by user" });
      }

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const reservationDate = new Date(reservation.date);
      reservationDate.setHours(0, 0, 0, 0);

      if (reservationDate.getTime() !== today.getTime()) {
        return res
          .status(403)
          .json({ message: "Can only cancel today's reservations" });
      }

      // Check time restrictions for cancellation
      const now = new Date();
      // if (reservation.mealType === 'day' && now.getHours() >= 11) {
      //   return res.status(403).json({ message: 'Cannot cancel day meal reservation after 9 AM' });
      // }
      // if (reservation.mealType === 'night' && now.getHours() >= 19) {
      //   return res.status(403).json({ message: 'Cannot cancel night meal reservation after 6 PM' });
      // }
      const enrolledOne = await enrollmentSchema.findOne({
        userId,
        isAccepted: true,
      });
      if (enrolledOne) {
        enrolledOne.attendance.forEach((att) => {
          if (att.date.toDateString() === today.toDateString()) {
            if (reservation.mealType === "day") {
              att.attendedDay = false;
            } else if (reservation.mealType === "night") {
              att.attendedNight = false;
            }
          }
        });
        await enrolledOne.save(); 
      }
      await reservationModel.deleteOne({ _id: reservationId });

      res.status(200).json({
        message: "Reservation cancelled successfully",
        reservationId,
      });
    } catch (error) {
      console.error("Error cancelling reservation:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }
);

userRouter.get("/profile",[userAuth],async(rea,res)=>{
  try{
    constuser = await userModel.findById(req.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

userRouter.put("/profile/update",[userAuth],async(req,res)=>{
  try{
    const { name, email, phone } = req.body;
    const user = await userModel.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user details
    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;

    await user.save();
    
    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = userRouter;
