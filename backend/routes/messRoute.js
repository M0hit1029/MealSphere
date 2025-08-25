const express = require("express");
const messModel = require("../models/messSchema"); // Mess Schema
const userModel = require("../models/userSchema"); // User Schema
const enrollmentSchema = require("../models/enrollmentSchema")
const reservationSchema = require("../models/reservationSchema")
const authenticateOwner = require("../middlewares/messOwnerAuth"); // Middleware to verify token
const authenticateUser = require("../middlewares/userAuth"); // User authentication middleware
const updateAttendance = require("../cron/markAttendance");
const messRouter = express.Router();
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/mess-images"); // You can customize the folder
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

messRouter.post("/register", authenticateOwner, upload.single('image'), async (req, res) => {
  try {
    const { name, address, liveLocation } = req.body;

    if (!name || !address || !liveLocation) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const imageUrl = req.file ? `/uploads/mess-images/${req.file.filename}` : null;

    const newMess = new messModel({
      name,
      address,
      liveLocation: JSON.parse(liveLocation), // Assuming frontend sends it as stringified JSON
      messOwnerId: req.messOwnerId,
      image: imageUrl,
    });

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

    if (!messes.length) {
      return res.status(404).json({ message: "No messes found for this owner" });
    }

    res.status(200).json({ messes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

messRouter.get("/nearby", authenticateUser, async (req, res) => {
  try {
    const { lat, lng } = req.query;
    console.log(lat, lng)
    if (!lat || !lng) {
      return res
        .status(400)
        .json({ message: "Latitude and longitude required" });
    }

    const nearbyMesses = await messModel.find({
      liveLocation: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(lng), parseFloat(lat)],
          },
          $maxDistance: 2000, // 2km radius
        },
      },
    });

    res.status(200).json({ messes: nearbyMesses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

messRouter.get("/get-all-mess", authenticateUser, async (req, res) => {
  try {
    const nearbyMesses = await messModel.find();
    console.log(nearbyMesses, "nearbyMesses in get-all-mess");
    res.status(200).json({ messes: nearbyMesses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

messRouter.get("/get-mess-by-latlong",authenticateUser,async (req,res)=>{
  try {
    const { lat, lng } = req.query;
    if (!lat || !lng) {
      return res
        .status(400)
        .json({ message: "Latitude and longitude required" });
    }
    console.log(lat, lng)
    const nearbyMesses = await messModel.find({
      liveLocation: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(lng), parseFloat(lat)],
          },
          $maxDistance: 5000, // 5km radius
        },
      },
    });

    res.status(200).json({ messes: nearbyMesses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
})

messRouter.get("/get-enrolled-mess", authenticateUser, async (req, res) => {
  const userId = req.userId;
  const today = new Date();
  const todayStart = new Date(today.setHours(0, 0, 0, 0));

  try {
    const userMess = await enrollmentSchema.findOne({ userId }).populate("messId");

    if (!userMess) {
      return res.status(404).json({ message: "User is not enrolled in any mess" });
    }

    if (!userMess.isAccepted) {
      return res.status(400).json({ message: "Request Not accepted yet", userMess });
    }

    // Check for reservations in other messes today
    const otherReservation = await reservationSchema.findOne({
      userId,
      messId: { $ne: userMess.messId._id },
      date: todayStart,
    });

    const reservedDayInOtherMess = otherReservation?.reservedDay || false;
    const reservedNightInOtherMess = otherReservation?.reservedNight || false;

    return res.status(200).json({
      userMess,
      reservedDayInOtherMess,
      reservedNightInOtherMess,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

messRouter.get("/:messId", async (req, res) => {
  try {
    const { messId } = req.params;
    const mess = await messModel
      .findById(messId)
      .populate("messOwnerId members");

    if (!mess) {
      return res.status(404).json({ message: "Mess not found" });
    }

    res.status(200).json({ mess });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

messRouter.put("/:messId", authenticateOwner, async (req, res) => {
  try {
    const { messId } = req.params;
    const { name, address, menu } = req.body;

    // Find the mess and check ownership
    const mess = await messModel.findById(messId);
    if (!mess) return res.status(404).json({ message: "Mess not found" });

    if (mess.messOwnerId.toString() !== req.messOwnerId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // Update mess details
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

messRouter.delete("/:messId", authenticateOwner, async (req, res) => {
  try {
    const { messId } = req.params;

    // Find mess and check ownership
    const mess = await messModel.findById(messId);
    if (!mess) return res.status(404).json({ message: "Mess not found" });

    if (mess.messOwnerId.toString() !== req.messOwnerId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

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

    // Check if the user is already enrolled in this mess (live enrollment)
    const existingEnrollment = await enrollmentSchema.findOne({ userId}).populate("messId");

    if (existingEnrollment) {
      return res.status(400).json({ message: "Already enrolled in this mess" });
    }

    // Create new enrollment
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

    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    // Check if mess exists
    const mess = await messModel.findById(messId);
    if (!mess) {
      return res.status(404).json({ message: 'Mess not found' });
    }

    // Check if user is enrolled and accepted
    const enrollment = await enrollmentSchema.findOne({ userId, messId });
    if (!enrollment || !enrollment.isAccepted) {
      return res.status(403).json({ message: 'You are not a member of this mess' });
    }

    // Prevent booking in another mess for day
    const existingReservation = await reservationSchema.findOne({
      userId,
      messId: { $ne: messId },
      mealType: "day",
      date: startOfDay,
    });

    if (existingReservation) {
      return res.status(400).json({ message: 'Already reserved lunch in another mess today' });
    }

    // Find or create reservation
    let reservation = await reservationSchema.findOne({
      userId,
      messId,
      date: startOfDay,
    });

    if (reservation) {
      if (reservation.mealType === 'day' || reservation.mealType === 'both') {
        return res.status(400).json({ message: 'Lunch already reserved for this mess' });
      }
      reservation.mealType = 'both'; // upgrade from 'night' to 'both'
    } else {
      reservation = new reservationSchema({
        userId,
        messId,
        mealType: "day",
        date: startOfDay,
      });
    }

    mess.attendingTodayDay += 1;
    await reservation.save();
    await mess.save();

    const existingAttendance = enrollment.attendance.find(entry =>
      new Date(entry.date).toDateString() === startOfDay.toDateString()
    );

    if (existingAttendance) {
      existingAttendance.attendedDay = true;
    } else {
      enrollment.attendance.push({
        date: startOfDay,
        attendedDay: true,
        attendedNight: false,
      });
    }

    await enrollment.save();

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

    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    // Check if mess exists
    const mess = await messModel.findById(messId);
    if (!mess) {
      return res.status(404).json({ message: 'Mess not found' });
    }

    // Check if user is enrolled and accepted
    const enrollment = await enrollmentSchema.findOne({ userId, messId });
    if (!enrollment || !enrollment.isAccepted) {
      return res.status(403).json({ message: 'You are not a member of this mess' });
    }

    // Prevent booking in another mess for night
    const existingReservation = await reservationSchema.findOne({
      userId,
      messId: { $ne: messId },
      mealType: "night",
      date: startOfDay,
    });

    if (existingReservation) {
      return res.status(400).json({ message: 'Already reserved dinner in another mess today' });
    }

    // Find or create reservation
    let reservation = await reservationSchema.findOne({
      userId,
      messId,
      date: startOfDay,
    });

    if (reservation) {
      if (reservation.mealType === 'night' || reservation.mealType === 'both') {
        return res.status(400).json({ message: 'Dinner already reserved for this mess' });
      }
      reservation.mealType = 'both'; // upgrade from 'day' to 'both'
    } else {
      reservation = new reservationSchema({
        userId,
        messId,
        mealType: "night",
        date: startOfDay,
      });
    }

    mess.attendingTodayNight += 1;
    await reservation.save();
    await mess.save();

    const existingAttendance = enrollment.attendance.find(entry =>
      new Date(entry.date).toDateString() === startOfDay.toDateString()
    );

    if (existingAttendance) {
      existingAttendance.attendedNight = true;
    } else {
      enrollment.attendance.push({
        date: startOfDay,
        attendedDay: false,
        attendedNight: true,
      });
    }

    await enrollment.save();

    res.json({ message: 'Dinner reservation confirmed' });

  } catch (error) {
    console.error('Error in night attendance:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

messRouter.get('/:messId/today-attendance', authenticateOwner, async (req, res) => {
  try {
    const { messId } = req.params;
    const today = new Date();
    const todayStart = new Date(today.setHours(0, 0, 0, 0));

    const mess = await messModel.findById(messId);
    if (!mess) return res.status(404).json({ message: 'Mess not found' });

    // Get all enrolled members
    const enrolledMembers = await enrollmentSchema.find({ messId, isAccepted: true }).populate('userId');
    const enrolledUserIds = enrolledMembers.map(e => e.userId._id.toString());

    // Get today's reservations for this mess
    const todaysReservations = await reservationSchema.find({
      messId,
      date: todayStart,
    });
    // Map userId to reservation info
    const reservationMap = {};
    todaysReservations.forEach(res => {
      reservationMap[res.userId.toString()] = res;
    });
    // Enrolled with attendance info
    const enrolledWithStatus = enrolledMembers.map(e => {
      const res = reservationMap[e.userId._id.toString()];
      return {
        user: e.userId,
        comingDay: res?.mealType === "day" || false,
        comingNight: res?.mealType === "night" || false,
      };
    });

    // Non-enrolled reservations
    const nonEnrolledReservations = todaysReservations.filter(res =>
      !enrolledUserIds.includes(res.userId.toString())
    );

    const nonEnrolledUserIds = nonEnrolledReservations.map(r => r.userId);
    const nonEnrolledUsers = await userModel.find({ _id: { $in: nonEnrolledUserIds } });

    // Attach attendance to non-enrolled
    const nonEnrolledWithStatus = nonEnrolledUsers.map(user => {
      const res = reservationMap[user._id.toString()];
      console.log(res, "res in attendance");
      return {
        user,
        comingDay: res?.mealType === "day" || false,
        comingNight: res?.mealType === "night" || false,
      };
    });
console.log(enrolledWithStatus, "enrolledWithStatus in attendance");
console.log(nonEnrolledWithStatus, "nonEnrolledWithStatus in attendance");
    res.status(200).json({
      enrolledMembers: enrolledWithStatus,
      nonEnrolledCustomers: nonEnrolledWithStatus,
    });

  } catch (error) {
    console.error('Error fetching attendance:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

messRouter.get('/:messId/user-attendance/:userId', authenticateOwner, async (req, res) => {
  try {
    const { messId, userId } = req.params;

    // Verify mess exists and ownership
    const mess = await messModel.findById(messId);
    if (!mess) return res.status(404).json({ message: 'Mess not found' });

    if (mess.messOwnerId.toString() !== req.messOwnerId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    // Fetch user's enrollment record
    const enrollment = await enrollmentSchema.findOne({ messId, userId });
    if (!enrollment || !enrollment.isAccepted) {
      return res.status(404).json({ message: 'User not enrolled in this mess' });
    }

    const attendanceData = enrollment.attendance || [];

    const totalDays = attendanceData.length;
    const presentDays = attendanceData.filter(d => d.attendedDay || d.attendedNight).length;
    const absentDays = totalDays - presentDays;
    console.log(attendanceData, "attendanceData in user attendance");
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

messRouter.post('/updateAttendance',async (req,res)=>{
  const {apikey} = req.body;

  if (apikey !== process.env.API_KEY_UPDATE_ATTENDANCE) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  await updateAttendance();
  res.send('Attendance updated');
});

module.exports = messRouter;
