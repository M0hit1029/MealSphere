const express = require("express");
const messModel = require("../models/messSchema"); // Mess Schema
const userModel = require("../models/userSchema"); // User Schema
const enrollmentSchema = require("../models/enrollmentSchema");
const reservationSchema = require("../models/reservationSchema");
const authenticateOwner = require("../middlewares/messOwnerAuth"); // Middleware to verify token
const authenticateUser = require("../middlewares/userAuth"); // User authentication middleware
const dotenv = require('dotenv');
const multer = require("multer");
const moment = require("moment-timezone");
const { upsertMealLedgerEntry } = require("../utils/mealLedger");
const mealLedgerModel = require("../models/mealLedgerSchema");
const {
  getCurrentIST,
  isBookingOpen,
  getBookingClosedMessage,
} = require("../utils/bookingWindow");

dotenv.config();

const messRouter = express.Router();

// Keep the image in memory and store it as a base64 data URI in MongoDB.
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("Only image uploads are allowed"));
    }
    cb(null, true);
  },
});

// Helper to get IST start of day
const getISTStartOfDay = () => moment().tz('Asia/Kolkata').startOf('day').toDate();

// ================== ROUTES ==================

// Register Mess
messRouter.post("/register", authenticateOwner, upload.single('image'), async (req, res) => {
  try {
    const { name, address, liveLocation } = req.body;
    if (!name || !address || !liveLocation) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const imageData = req.file
      ? `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`
      : undefined;

    const parsedLiveLocation = typeof liveLocation === "string" ? JSON.parse(liveLocation) : liveLocation;

    const newMessData = {
      name,
      address,
      liveLocation: parsedLiveLocation,
      messOwnerId: req.messOwnerId,
    };

    if (imageData) {
      newMessData.image = imageData;
    }

    const newMess = new messModel(newMessData);

    await newMess.save();
    res.status(201).json({ message: "Mess registered successfully", mess: newMess });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get all messes for owner
messRouter.get("/owner/messes", authenticateOwner, async (req, res) => {
  try {
    const messes = await messModel.find({ messOwnerId: req.messOwnerId });
    if (!messes.length) {
      return res.status(404).json({ message: "No messes found for this owner" });
    }
    res.status(200).json({ messes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Nearby messes (2km)
messRouter.get("/nearby", authenticateUser, async (req, res) => {
  try {
    const { lat, lng } = req.query;
    if (!lat || !lng) {
      return res.status(400).json({ message: "Latitude and longitude required" });
    }

    const nearbyMesses = await messModel.find({
      liveLocation: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(lng), parseFloat(lat)],
          },
          $maxDistance: 2000,
        },
      },
    });

    res.status(200).json({ messes: nearbyMesses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get all messes
messRouter.get("/get-all-mess", authenticateUser, async (req, res) => {
  try {
    const messes = await messModel.find();
    res.status(200).json({ messes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get messes by lat/lng (5km)
messRouter.get("/get-mess-by-latlong", authenticateUser, async (req, res) => {
  try {
    const { lat, lng } = req.query;
    if (!lat || !lng) return res.status(400).json({ message: "Latitude and longitude required" });

    const nearbyMesses = await messModel.find({
      liveLocation: {
        $near: {
          $geometry: { type: "Point", coordinates: [parseFloat(lng), parseFloat(lat)] },
          $maxDistance: 5000,
        },
      },
    });

    res.status(200).json({ messes: nearbyMesses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get enrolled mess for user
messRouter.get("/get-enrolled-mess", authenticateUser, async (req, res) => {
  try {
    const userId = req.userId;
    const todayStart = getISTStartOfDay();

    const userMess = await enrollmentSchema.findOne({ userId }).populate("messId");
    if (!userMess) return res.status(404).json({ message: "User is not enrolled in any mess" });
    if (!userMess.isAccepted) return res.status(400).json({ message: "Request Not accepted yet", userMess });

    const otherReservation = await reservationSchema.findOne({
      userId,
      messId: { $ne: userMess.messId._id },
      date: todayStart,
    });

    res.status(200).json({
      userMess,
      reservedDayInOtherMess: otherReservation?.reservedDay || false,
      reservedNightInOtherMess: otherReservation?.reservedNight || false,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get mess by ID
messRouter.get("/:messId", async (req, res) => {
  try {
    const { messId } = req.params;
    const mess = await messModel.findById(messId).populate("messOwnerId members");
    if (!mess) return res.status(404).json({ message: "Mess not found" });
    res.status(200).json({ mess });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Update mess
messRouter.put("/:messId", authenticateOwner, async (req, res) => {
  try {
    const { messId } = req.params;
    const { name, address, menu } = req.body;

    const mess = await messModel.findById(messId);
    if (!mess) return res.status(404).json({ message: "Mess not found" });
    if (mess.messOwnerId.toString() !== req.messOwnerId) return res.status(403).json({ message: "Unauthorized" });

    if (name) mess.name = name;
    if (address) mess.address = address;
    if (menu) mess.menu = menu;

    await mess.save();
    res.status(200).json({ message: "Mess updated successfully", mess });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Delete mess
messRouter.delete("/:messId", authenticateOwner, async (req, res) => {
  try {
    const { messId } = req.params;
    const mess = await messModel.findById(messId);
    if (!mess) return res.status(404).json({ message: "Mess not found" });
    if (mess.messOwnerId.toString() !== req.messOwnerId) return res.status(403).json({ message: "Unauthorized" });

    await messModel.findByIdAndDelete(messId);
    res.status(200).json({ message: "Mess deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Join mess
messRouter.post("/:messId/join", authenticateUser, async (req, res) => {
  try {
    const { messId } = req.params;
    const userId = req.userId;

    const existingEnrollment = await enrollmentSchema.findOne({ userId }).populate("messId");
    if (existingEnrollment) return res.status(400).json({ message: "Already enrolled in this mess" });

    const enrollment = await enrollmentSchema.create({ userId, messId });
    await enrollment.populate("messId");
    res.status(200).json({ message: "✅ Successfully joined mess", enrollment });
  } catch (error) {
    console.error("Join error:", error);
    res.status(500).json({ message: "❌ Server error", error: error.message });
  }
});

// Attend lunch
messRouter.post('/attend/:messId/day', authenticateUser, async (req, res) => {
  try {
    const { messId } = req.params;
    const userId = req.userId;
    const nowIST = getCurrentIST();

    if (!isBookingOpen('day', nowIST)) {
      return res.status(403).json({ message: getBookingClosedMessage('day') });
    }

    const startOfDay = nowIST.clone().startOf('day').toDate();

    const mess = await messModel.findById(messId);
    if (!mess) return res.status(404).json({ message: 'Mess not found' });
    if (mess.messOwnerId.toString() !== req.messOwnerId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    const enrollment = await enrollmentSchema.findOne({ userId, messId });
    if (!enrollment || !enrollment.isAccepted) return res.status(403).json({ message: 'You are not a member of this mess' });

    const existingReservation = await reservationSchema.findOne({
      userId,
      messId: { $ne: messId },
      mealType: "day",
      date: startOfDay,
    });
    if (existingReservation) return res.status(400).json({ message: 'Already reserved lunch in another mess today' });

    let reservation = await reservationSchema.findOne({ userId, messId, date: startOfDay });
    if (reservation) {
      if (reservation.mealType === 'day' || reservation.mealType === 'both') {
        return res.status(400).json({ message: 'Lunch already reserved for this mess' });
      }
      reservation.mealType = 'both';
    } else {
      reservation = new reservationSchema({ userId, messId, mealType: "day", date: startOfDay });
    }

    mess.attendingTodayDay += 1;
    await reservation.save();
    await mess.save();

    await upsertMealLedgerEntry({
      userId,
      mess,
      date: startOfDay,
      mealType: "day",
      reservationStatus: "reserved",
      attendanceStatus: "not_marked",
      source: "enrolled_attendance",
    });

    res.json({ message: 'Lunch reservation confirmed' });
  } catch (error) {
    console.error('Error in day attendance:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Attend dinner
messRouter.post('/attend/:messId/night', authenticateUser, async (req, res) => {
  try {
    const { messId } = req.params;
    const userId = req.userId;
    const nowIST = getCurrentIST();

    if (!isBookingOpen('night', nowIST)) {
      return res.status(403).json({ message: getBookingClosedMessage('night') });
    }

    const startOfDay = nowIST.clone().startOf('day').toDate();

    const mess = await messModel.findById(messId);
    if (!mess) return res.status(404).json({ message: 'Mess not found' });

    const enrollment = await enrollmentSchema.findOne({ userId, messId });
    if (!enrollment || !enrollment.isAccepted) return res.status(403).json({ message: 'You are not a member of this mess' });

    const existingReservation = await reservationSchema.findOne({
      userId,
      messId: { $ne: messId },
      mealType: "night",
      date: startOfDay,
    });
    if (existingReservation) return res.status(400).json({ message: 'Already reserved dinner in another mess today' });

    let reservation = await reservationSchema.findOne({ userId, messId, date: startOfDay });
    if (reservation) {
      if (reservation.mealType === 'night' || reservation.mealType === 'both') {
        return res.status(400).json({ message: 'Dinner already reserved for this mess' });
      }
      reservation.mealType = 'both';
    } else {
      reservation = new reservationSchema({ userId, messId, mealType: "night", date: startOfDay });
    }

    mess.attendingTodayNight += 1;
    await reservation.save();
    await mess.save();

    await upsertMealLedgerEntry({
      userId,
      mess,
      date: startOfDay,
      mealType: "night",
      reservationStatus: "reserved",
      attendanceStatus: "not_marked",
      source: "enrolled_attendance",
    });

    res.json({ message: 'Dinner reservation confirmed' });
  } catch (error) {
    console.error('Error in night attendance:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Today attendance report
messRouter.get('/:messId/today-attendance', authenticateOwner, async (req, res) => {
  try {
    const { messId } = req.params;
    const todayStart = getISTStartOfDay();

    const mess = await messModel.findById(messId);
    if (!mess) return res.status(404).json({ message: 'Mess not found' });

    const enrolledMembers = await enrollmentSchema.find({ messId, isAccepted: true }).populate('userId');
    const enrolledUserIds = enrolledMembers.map(e => e.userId._id.toString());

    const todaysReservations = await reservationSchema.find({ messId, date: todayStart }).populate('userId', 'name email phone');
    const reservationMap = {};
    todaysReservations.forEach((res) => {
      const userId = res.userId._id ? res.userId._id.toString() : res.userId.toString();
      if (!reservationMap[userId]) {
        reservationMap[userId] = { day: false, night: false };
      }
      if (res.mealType === "day" || res.mealType === "both") {
        reservationMap[userId].day = true;
      }
      if (res.mealType === "night" || res.mealType === "both") {
        reservationMap[userId].night = true;
      }
    });

    const markedEntries = await mealLedgerModel.find({
      messId,
      date: todayStart,
      attendanceStatus: 'attended',
    });

    const markedMap = {};
    markedEntries.forEach((entry) => {
      const key = `${entry.userId.toString()}_${entry.mealType}`;
      markedMap[key] = true;
    });

    const enrolledWithStatus = enrolledMembers.map(e => {
      const userId = e.userId._id.toString();
      const reserved = reservationMap[userId] || { day: false, night: false };
      return {
        user: e.userId,
        isEnrolled: true,
        comingDay: reserved.day,
        comingNight: reserved.night,
        dayMarked: !!markedMap[`${userId}_day`],
        nightMarked: !!markedMap[`${userId}_night`],
      };
    });

    const nonEnrolledMap = {};
    todaysReservations.forEach((res) => {
      const userId = res.userId._id ? res.userId._id.toString() : res.userId.toString();
      if (enrolledUserIds.includes(userId)) return;
      if (!nonEnrolledMap[userId]) {
        nonEnrolledMap[userId] = {
          user: res.userId,
          isEnrolled: false,
          comingDay: false,
          comingNight: false,
          dayMarked: !!markedMap[`${userId}_day`],
          nightMarked: !!markedMap[`${userId}_night`],
        };
      }
      if (res.mealType === "day" || res.mealType === "both") {
        nonEnrolledMap[userId].comingDay = true;
      }
      if (res.mealType === "night" || res.mealType === "both") {
        nonEnrolledMap[userId].comingNight = true;
      }
    });

    const nonEnrolledWithStatus = Object.values(nonEnrolledMap);

    res.status(200).json({ enrolledMembers: enrolledWithStatus, nonEnrolledCustomers: nonEnrolledWithStatus });
  } catch (error) {
    console.error('Error fetching attendance:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

messRouter.patch('/:messId/attendance/:userId/:mealType', authenticateOwner, async (req, res) => {
  try {
    const { messId, userId, mealType } = req.params;
    const { attended } = req.body;

    if (!["day", "night"].includes(mealType)) {
      return res.status(400).json({ message: 'Invalid mealType. Use day or night.' });
    }
    if (typeof attended !== 'boolean') {
      return res.status(400).json({ message: 'attended must be boolean.' });
    }

    const mess = await messModel.findById(messId);
    if (!mess) return res.status(404).json({ message: 'Mess not found' });
    if (mess.messOwnerId.toString() !== req.messOwnerId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    const user = await userModel.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const todayStart = getISTStartOfDay();
    const enrollment = await enrollmentSchema.findOne({ userId, messId, isAccepted: true });
    let reservation = await reservationSchema.findOne({ userId, messId, date: todayStart });

    const isEnrolled = !!enrollment;
    const isNonEnrolledWithNoReservation = !isEnrolled && !reservation;
    if (isNonEnrolledWithNoReservation) {
      return res.status(400).json({
        message: 'Cannot mark attendance for non-enrolled user without a reservation.',
      });
    }

    if (attended) {
      if (!reservation) {
        reservation = await reservationSchema.create({ userId, messId, date: todayStart, mealType });
        if (mealType === 'day') mess.attendingTodayDay += 1;
        else mess.attendingTodayNight += 1;
        await mess.save();
      } else {
        const hasDay = reservation.mealType === 'day' || reservation.mealType === 'both';
        const hasNight = reservation.mealType === 'night' || reservation.mealType === 'both';

        if (mealType === 'day' && !hasDay) {
          reservation.mealType = hasNight ? 'both' : 'day';
          mess.attendingTodayDay += 1;
          await mess.save();
          await reservation.save();
        } else if (mealType === 'night' && !hasNight) {
          reservation.mealType = hasDay ? 'both' : 'night';
          mess.attendingTodayNight += 1;
          await mess.save();
          await reservation.save();
        }
      }
    }

    if (isEnrolled) {
      let attendanceEntry = enrollment.attendance.find((entry) =>
        moment(entry.date).tz('Asia/Kolkata').isSame(todayStart, 'day')
      );

      if (!attendanceEntry) {
        attendanceEntry = { date: todayStart, attendedDay: false, attendedNight: false };
        enrollment.attendance.push(attendanceEntry);
        attendanceEntry = enrollment.attendance[enrollment.attendance.length - 1];
      }

      if (mealType === 'day') attendanceEntry.attendedDay = attended;
      if (mealType === 'night') attendanceEntry.attendedNight = attended;
      await enrollment.save();
    }

    await upsertMealLedgerEntry({
      userId,
      mess,
      date: todayStart,
      mealType,
      reservationStatus: 'reserved',
      attendanceStatus: attended ? 'attended' : 'not_marked',
      source: isEnrolled ? 'enrolled_attendance' : 'daily_reservation',
    });

    return res.status(200).json({
      message: attended ? 'Attendance marked successfully.' : 'Attendance unmarked successfully.',
      userId,
      mealType,
      attended,
    });
  } catch (error) {
    console.error('Error marking attendance:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// User attendance report
messRouter.get('/:messId/user-attendance/:userId', authenticateOwner, async (req, res) => {
  try {
    const { messId, userId } = req.params;

    const mess = await messModel.findById(messId);
    if (!mess) return res.status(404).json({ message: 'Mess not found' });
    if (mess.messOwnerId.toString() !== req.messOwnerId) return res.status(403).json({ message: 'Unauthorized' });

    const enrollment = await enrollmentSchema.findOne({ messId, userId });
    if (!enrollment || !enrollment.isAccepted) return res.status(404).json({ message: 'User not enrolled in this mess' });

    const attendanceData = enrollment.attendance || [];
    const totalDays = attendanceData.length;
    const presentDays = attendanceData.filter(d => d.attendedDay || d.attendedNight).length;
    const absentDays = totalDays - presentDays;

    res.json({
      totalDays,
      presentDays,
      absentDays,
      records: attendanceData.map(d => ({
        date: d.date,
        attendedDay: d.attendedDay,
        attendedNight: d.attendedNight
      }))
    });
  } catch (error) {
    console.error('Error getting attendance:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = messRouter;
