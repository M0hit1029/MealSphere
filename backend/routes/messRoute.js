const express = require("express");
const mongoose = require("mongoose");
const messModel = require("../models/messSchema");
const userModel = require("../models/userSchema");
const enrollmentSchema = require("../models/enrollmentSchema");
const reservationSchema = require("../models/reservationSchema");
const authenticateOwner = require("../middlewares/messOwnerAuth");
const authenticateUser = require("../middlewares/userAuth");
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

const getISTStartOfDay = () => moment().tz('Asia/Kolkata').startOf('day').toDate();

const getMealCapacityLimit = (mess, mealType) => {
  const rawLimit = mealType === 'day' ? mess?.capacity?.day?.limit : mess?.capacity?.night?.limit;
  if (rawLimit === null || rawLimit === undefined || rawLimit === '') return null;
  const limit = Number(rawLimit);
  return Number.isFinite(limit) && limit > 0 ? limit : null;
};

// Count actual reservation documents for today — never trust the stored counter for enforcement.
// A 'both' doc counts as booked for BOTH day and night.
const getLiveBookingCount = async (messId, mealType) => {
  const todayStart = getISTStartOfDay();
  return reservationSchema.countDocuments({
    messId,
    mealType: mealType === 'day' ? { $in: ['day', 'both'] } : { $in: ['night', 'both'] },
    date: todayStart,
  });
};

const checkCapacityReached = async (mess, mealType) => {
  const limit = getMealCapacityLimit(mess, mealType);
  if (limit === null) return false;
  const liveCount = await getLiveBookingCount(mess._id, mealType);
  return liveCount >= limit;
};

// Attach live booking counts to a plain mess object so all API responses are consistent
const attachLiveCounts = async (mess) => {
  const obj = mess.toObject ? mess.toObject() : { ...mess };
  const [liveDay, liveNight] = await Promise.all([
    getLiveBookingCount(obj._id, 'day'),
    getLiveBookingCount(obj._id, 'night'),
  ]);
  obj.attendingTodayDay = liveDay;
  obj.attendingTodayNight = liveNight;
  return obj;
};

// ================== ROUTES ==================

messRouter.post("/register", authenticateOwner, upload.single('image'), async (req, res) => {
  try {
    const { name, address, liveLocation } = req.body;
    if (!name || !address || !liveLocation) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const imageData = req.file
      ? `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`
      : undefined;

    const parsedLiveLocation = typeof liveLocation === "string"
      ? JSON.parse(liveLocation)
      : liveLocation;

    const newMessData = { name, address, liveLocation: parsedLiveLocation, messOwnerId: req.messOwnerId };
    if (imageData) newMessData.image = imageData;

    const newMess = new messModel(newMessData);
    await newMess.save();
    res.status(201).json({ message: "Mess registered successfully", mess: newMess });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

messRouter.get("/owner/messes", authenticateOwner, async (req, res) => {
  try {
    const messes = await messModel.find({ messOwnerId: req.messOwnerId });
    if (!messes.length) return res.status(404).json({ message: "No messes found for this owner" });

    const messesWithLiveCounts = await Promise.all(messes.map(attachLiveCounts));
    res.status(200).json({ messes: messesWithLiveCounts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

messRouter.get("/nearby", authenticateUser, async (req, res) => {
  try {
    const { lat, lng } = req.query;
    if (!lat || !lng) return res.status(400).json({ message: "Latitude and longitude required" });

    const nearbyMesses = await messModel.find({
      liveLocation: {
        $near: {
          $geometry: { type: "Point", coordinates: [parseFloat(lng), parseFloat(lat)] },
          $maxDistance: 2000,
        },
      },
    });

    const messesWithLiveCounts = await Promise.all(nearbyMesses.map(attachLiveCounts));
    res.status(200).json({ messes: messesWithLiveCounts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

messRouter.get("/get-all-mess", authenticateUser, async (req, res) => {
  try {
    const messes = await messModel.find();
    const messesWithLiveCounts = await Promise.all(messes.map(attachLiveCounts));
    res.status(200).json({ messes: messesWithLiveCounts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

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

    const messesWithLiveCounts = await Promise.all(nearbyMesses.map(attachLiveCounts));
    res.status(200).json({ messes: messesWithLiveCounts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

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

    const userMessObj = userMess.toObject();
    userMessObj.messId = await attachLiveCounts(userMess.messId);

    res.status(200).json({
      userMess: userMessObj,
      reservedDayInOtherMess: otherReservation?.reservedDay || false,
      reservedNightInOtherMess: otherReservation?.reservedNight || false,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

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

messRouter.put("/:messId", authenticateOwner, async (req, res) => {
  try {
    const { messId } = req.params;
    const { name, address, menu, capacity } = req.body;

    const mess = await messModel.findById(messId);
    if (!mess) return res.status(404).json({ message: "Mess not found" });
    if (mess.messOwnerId.toString() !== req.messOwnerId) return res.status(403).json({ message: "Unauthorized" });

    if (name) mess.name = name;
    if (address) mess.address = address;
    if (menu) mess.menu = menu;
    if (capacity) {
      mess.capacity = {
        day: {
          limit: capacity.day?.limit === "" || capacity.day?.limit === null || capacity.day?.limit === undefined
            ? null : Number(capacity.day.limit),
          waitlistEnabled: !!capacity.day?.waitlistEnabled,
        },
        night: {
          limit: capacity.night?.limit === "" || capacity.night?.limit === null || capacity.night?.limit === undefined
            ? null : Number(capacity.night.limit),
          waitlistEnabled: !!capacity.night?.waitlistEnabled,
        },
      };
    }

    await mess.save();
    res.status(200).json({ message: "Mess updated successfully", mess });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

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

    const enrollment = await enrollmentSchema.findOne({ userId, messId });
    if (!enrollment || !enrollment.isAccepted) {
      return res.status(403).json({ message: 'You are not a member of this mess' });
    }

    const existingElsewhere = await reservationSchema.findOne({
      userId,
      messId: { $ne: messId },
      mealType: { $in: ['day', 'both'] },
      date: startOfDay,
    });
    if (existingElsewhere) return res.status(400).json({ message: 'Already reserved lunch in another mess today' });

    let reservation = await reservationSchema.findOne({ userId, messId, date: startOfDay });
    if (reservation && (reservation.mealType === 'day' || reservation.mealType === 'both')) {
      return res.status(400).json({ message: 'Lunch already reserved for this mess' });
    }

    // Live capacity check — immune to stale counter
    if (await checkCapacityReached(mess, 'day')) {
      return res.status(409).json({ message: 'Mess Full', mealType: 'day' });
    }

    if (reservation) {
      reservation.mealType = 'both';
    } else {
      reservation = new reservationSchema({ userId, messId, mealType: "day", date: startOfDay });
    }

    await reservation.save();

    // Re-sync stored counter from live count after save
    mess.attendingTodayDay = await getLiveBookingCount(messId, 'day');
    await mess.save();

    await upsertMealLedgerEntry({
      userId, mess, date: startOfDay,
      mealType: "day", reservationStatus: "reserved",
      attendanceStatus: "not_marked", source: "enrolled_attendance",
    });

    res.json({ message: 'Lunch reservation confirmed' });
  } catch (error) {
    console.error('Error in day attendance:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

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
    if (!enrollment || !enrollment.isAccepted) {
      return res.status(403).json({ message: 'You are not a member of this mess' });
    }

    const existingElsewhere = await reservationSchema.findOne({
      userId,
      messId: { $ne: messId },
      mealType: { $in: ['night', 'both'] },
      date: startOfDay,
    });
    if (existingElsewhere) return res.status(400).json({ message: 'Already reserved dinner in another mess today' });

    let reservation = await reservationSchema.findOne({ userId, messId, date: startOfDay });
    if (reservation && (reservation.mealType === 'night' || reservation.mealType === 'both')) {
      return res.status(400).json({ message: 'Dinner already reserved for this mess' });
    }

    // Live capacity check — immune to stale counter
    if (await checkCapacityReached(mess, 'night')) {
      return res.status(409).json({ message: 'Mess Full', mealType: 'night' });
    }

    if (reservation) {
      reservation.mealType = 'both';
    } else {
      reservation = new reservationSchema({ userId, messId, mealType: "night", date: startOfDay });
    }

    await reservation.save();

    // Re-sync stored counter from live count after save
    mess.attendingTodayNight = await getLiveBookingCount(messId, 'night');
    await mess.save();

    await upsertMealLedgerEntry({
      userId, mess, date: startOfDay,
      mealType: "night", reservationStatus: "reserved",
      attendanceStatus: "not_marked", source: "enrolled_attendance",
    });

    res.json({ message: 'Dinner reservation confirmed' });
  } catch (error) {
    console.error('Error in night attendance:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

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
      const uid = res.userId._id ? res.userId._id.toString() : res.userId.toString();
      if (!reservationMap[uid]) reservationMap[uid] = { day: false, night: false };
      if (res.mealType === "day" || res.mealType === "both") reservationMap[uid].day = true;
      if (res.mealType === "night" || res.mealType === "both") reservationMap[uid].night = true;
    });

    const markedEntries = await mealLedgerModel.find({ messId, date: todayStart, attendanceStatus: 'attended' });
    const markedMap = {};
    markedEntries.forEach((entry) => {
      markedMap[`${entry.userId.toString()}_${entry.mealType}`] = true;
    });

    const enrolledWithStatus = enrolledMembers.map(e => {
      const uid = e.userId._id.toString();
      const reserved = reservationMap[uid] || { day: false, night: false };
      return {
        user: e.userId,
        isEnrolled: true,
        comingDay: reserved.day,
        comingNight: reserved.night,
        dayMarked: !!markedMap[`${uid}_day`],
        nightMarked: !!markedMap[`${uid}_night`],
      };
    });

    const nonEnrolledMap = {};
    todaysReservations.forEach((res) => {
      const uid = res.userId._id ? res.userId._id.toString() : res.userId.toString();
      if (enrolledUserIds.includes(uid)) return;
      if (!nonEnrolledMap[uid]) {
        nonEnrolledMap[uid] = {
          user: res.userId, isEnrolled: false,
          comingDay: false, comingNight: false,
          dayMarked: !!markedMap[`${uid}_day`],
          nightMarked: !!markedMap[`${uid}_night`],
        };
      }
      if (res.mealType === "day" || res.mealType === "both") nonEnrolledMap[uid].comingDay = true;
      if (res.mealType === "night" || res.mealType === "both") nonEnrolledMap[uid].comingNight = true;
    });

    res.status(200).json({
      enrolledMembers: enrolledWithStatus,
      nonEnrolledCustomers: Object.values(nonEnrolledMap),
    });
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
    if (mess.messOwnerId.toString() !== req.messOwnerId) return res.status(403).json({ message: 'Unauthorized' });

    const user = await userModel.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const todayStart = getISTStartOfDay();
    const enrollment = await enrollmentSchema.findOne({ userId, messId, isAccepted: true });
    let reservation = await reservationSchema.findOne({ userId, messId, date: todayStart });

    const isEnrolled = !!enrollment;
    if (!isEnrolled && !reservation) {
      return res.status(400).json({ message: 'Cannot mark attendance for non-enrolled user without a reservation.' });
    }

    if (attended) {
      if (!reservation) {
        reservation = await reservationSchema.create({ userId, messId, date: todayStart, mealType });
      } else {
        const hasDay = reservation.mealType === 'day' || reservation.mealType === 'both';
        const hasNight = reservation.mealType === 'night' || reservation.mealType === 'both';
        if (mealType === 'day' && !hasDay) {
          reservation.mealType = hasNight ? 'both' : 'day';
          await reservation.save();
        } else if (mealType === 'night' && !hasNight) {
          reservation.mealType = hasDay ? 'both' : 'night';
          await reservation.save();
        }
      }

      // Always re-sync counter from live count
      if (mealType === 'day') mess.attendingTodayDay = await getLiveBookingCount(messId, 'day');
      else mess.attendingTodayNight = await getLiveBookingCount(messId, 'night');
      await mess.save();
    }

    if (isEnrolled) {
      let attendanceEntry = enrollment.attendance.find((entry) =>
        moment(entry.date).tz('Asia/Kolkata').isSame(todayStart, 'day')
      );
      if (!attendanceEntry) {
        enrollment.attendance.push({ date: todayStart, attendedDay: false, attendedNight: false });
        attendanceEntry = enrollment.attendance[enrollment.attendance.length - 1];
      }
      if (mealType === 'day') attendanceEntry.attendedDay = attended;
      if (mealType === 'night') attendanceEntry.attendedNight = attended;
      await enrollment.save();
    }

    await upsertMealLedgerEntry({
      userId, mess, date: todayStart, mealType,
      reservationStatus: 'reserved',
      attendanceStatus: attended ? 'attended' : 'not_marked',
      source: isEnrolled ? 'enrolled_attendance' : 'daily_reservation',
    });

    return res.status(200).json({
      message: attended ? 'Attendance marked successfully.' : 'Attendance unmarked successfully.',
      userId, mealType, attended,
    });
  } catch (error) {
    console.error('Error marking attendance:', error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
});

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

    res.json({
      totalDays,
      presentDays,
      absentDays: totalDays - presentDays,
      records: attendanceData.map(d => ({ date: d.date, attendedDay: d.attendedDay, attendedNight: d.attendedNight })),
    });
  } catch (error) {
    console.error('Error getting attendance:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

messRouter.get('/:messId/stats', authenticateOwner, async (req, res) => {
  try {
    const { messId } = req.params;
    if (!mongoose.isValidObjectId(messId)) return res.status(400).json({ message: 'Invalid mess ID' });

    const messObjectId = new mongoose.Types.ObjectId(messId);
    const mess = await messModel.findById(messId);
    if (!mess) return res.status(404).json({ message: 'Mess not found' });
    if (mess.messOwnerId.toString() !== req.messOwnerId) return res.status(403).json({ message: 'Unauthorized' });

    const nowIST = moment().tz('Asia/Kolkata');
    const monthStart = nowIST.clone().startOf('month').toDate();
    const weekStart = nowIST.clone().startOf('week').toDate();
    const monthEnd = nowIST.clone().endOf('month').toDate();
    const weekEnd = nowIST.clone().endOf('week').toDate();

    const [allTimeMeals, thisWeekMeals, thisMonthMeals] = await Promise.all([
      mealLedgerModel.countDocuments({ messId, attendanceStatus: 'attended' }),
      mealLedgerModel.countDocuments({ messId, attendanceStatus: 'attended', date: { $gte: weekStart, $lte: weekEnd } }),
      mealLedgerModel.countDocuments({ messId, attendanceStatus: 'attended', date: { $gte: monthStart, $lte: monthEnd } }),
    ]);

    const popularDishes = await mealLedgerModel.aggregate([
      { $match: { messId: messObjectId, attendanceStatus: 'attended' } },
      { $unwind: '$dishNames' },
      { $group: { _id: '$dishNames', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]);

    const peakBookingTimes = await mealLedgerModel.aggregate([
      { $match: { messId: messObjectId, date: { $gte: weekStart } } },
      { $group: { _id: { day: { $dayOfWeek: '$date' }, mealType: '$mealType' }, count: { $sum: 1 } } },
      { $sort: { '_id.day': 1 } },
    ]);

    const revenueByMealType = await mealLedgerModel.aggregate([
      { $match: { messId: messObjectId, reservationStatus: 'reserved', date: { $gte: monthStart } } },
      { $group: { _id: '$mealType', totalRevenue: { $sum: '$totalPrice' }, count: { $sum: 1 } } },
    ]);

    const [totalReservations, cancelledReservations] = await Promise.all([
      mealLedgerModel.countDocuments({ messId, reservationStatus: { $in: ['reserved', 'cancelled'] }, date: { $gte: monthStart } }),
      mealLedgerModel.countDocuments({ messId, reservationStatus: 'cancelled', date: { $gte: monthStart } }),
    ]);

    const cancellationRate = totalReservations > 0
      ? ((cancelledReservations / totalReservations) * 100).toFixed(2)
      : 0;

    const hourlyPattern = await mealLedgerModel.aggregate([
      { $match: { messId: messObjectId, date: { $gte: weekStart } } },
      { $group: { _id: { hour: { $hour: '$createdAt' }, mealType: '$mealType' }, count: { $sum: 1 } } },
      { $sort: { '_id.hour': 1 } },
    ]);

    res.status(200).json({
      totalMealsServed: { allTime: allTimeMeals, thisWeek: thisWeekMeals, thisMonth: thisMonthMeals },
      popularDishes: popularDishes.map(d => ({ dishName: d._id, count: d.count })),
      peakBookingTimes: peakBookingTimes.map(d => ({
        day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d._id.day - 1],
        mealType: d._id.mealType, count: d.count,
      })),
      revenueBreakdown: revenueByMealType.map(r => ({
        mealType: r._id, totalRevenue: r.totalRevenue, count: r.count,
        avgPerMeal: (r.totalRevenue / r.count).toFixed(2),
      })),
      cancellationStats: { totalReservations, cancelledReservations, cancellationRate: parseFloat(cancellationRate) },
      hourlyPattern: hourlyPattern.map(h => ({ hour: `${h._id.hour}:00`, mealType: h._id.mealType, count: h.count })),
    });
  } catch (error) {
    console.error('Error fetching statistics:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = messRouter;