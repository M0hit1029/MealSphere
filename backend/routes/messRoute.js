const express = require("express");
const messModel = require("../models/messSchema"); // Mess Schema
const enrollmentSchema = require("../models/enrollmentSchema")
const reservationSchema = require("../models/reservationSchema")
const authenticateOwner = require("../middlewares/messOwnerAuth"); // Middleware to verify token
const authenticateUser = require("../middlewares/userAuth"); // User authentication middleware
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

// Get all messes with wider radius (5km)
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


// messRouter.get("/get-attendence-list/day",authenticateOwner,async(req,res)=>{
//   try{
//     const id = req.messId;
//     const enrollements = await enrollmentSchema.find({ messId: id }).populate("userId"); 
//     const reservations = await reservationSchema.find({ messId: id, mealType: "day" }).populate("userId");
//     enrollements.forEach((enrollment) => {
//       const userId = enrollment.userId;

//     })
//   }
// })
// messRouter.delete("/delete-enrollment", authenticateUser, async (req, res) => {
//   const enrolled
// })

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

    const today = new Date();
    const todayStart = new Date(today.setHours(0, 0, 0, 0));

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

    // Prevent double booking in another mess for day
    const existingReservation = await reservationSchema.findOne({
      userId,
      messId: { $ne: messId },
      mealType: "day",
      date: todayStart,
    });
    console.log(existingReservation, "existingReservation in day attendance");
    if (existingReservation) {
      return res.status(400).json({ message: 'Already reserved lunch in another mess today' });
    }

    // Create or update today's reservation
    let reservation = await reservationSchema.findOne({
      userId,
      messId,
      date: todayStart
    });

    if (reservation) {
      if (reservation.reservedDay) {
        return res.status(400).json({ message: 'Lunch already reserved for this mess' });
      }
      reservation.reservedDay = true;
    } else {
      reservation = new reservationSchema({
        userId,
        messId,
        mealType: "day",
        date: todayStart,
        reservedDay: true,
        reservedNight: false
      });
    }

    // Increment mess day attendance
    mess.attendingTodayDay += 1;

    // Save changes
    await reservation.save();
    await mess.save();

    // Update enrollment attendance
    const existingAttendance = enrollment.attendance.find(entry =>
      new Date(entry.date).toDateString() === todayStart.toDateString()
    );

    if (existingAttendance) {
      existingAttendance.attendedDay = true;
    } else {
      enrollment.attendance.push({
        date: todayStart,
        attendedDay: true,
        attendedNight: false,
      });
    }

    await enrollment.save();

    // Success response
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

    // Get today's date at 00:00:00
    const today = new Date();
    const todayStart = new Date(today.setHours(0, 0, 0, 0));

    // Find the mess
    const mess = await messModel.findById(messId);
    if (!mess) {
      return res.status(404).json({ message: 'Mess not found' });
    }

    // Check if user is enrolled in this mess and is accepted
    const enrollment = await enrollmentSchema.findOne({ userId, messId });
    if (!enrollment || !enrollment.isAccepted) {
      return res.status(403).json({ message: 'You are not a member of this mess' });
    }

    // Check if user already reserved night in another mess today
    const existingReservation = await reservationSchema.findOne({
      userId,
      messId: { $ne: messId },
      mealType: "night",
      date: todayStart,
    });

    if (existingReservation) {
      return res.status(400).json({ message: 'Already reserved dinner in another mess today' });
    }

    // Find or create reservation for this mess and today
    let reservation = await reservationSchema.findOne({
      userId,
      messId,
      date: todayStart
    });

    if (reservation) {
      if (reservation.reservedNight) {
        return res.status(400).json({ message: 'Dinner already reserved for this mess' });
      }
      reservation.reservedNight = true;
    } else {
      reservation = new reservationSchema({
        userId,
        messId,
        mealType:"night",
        date: todayStart,
        reservedDay: false,
        reservedNight: true
      });
    }

    // Update mess attendance count
    mess.attendingTodayNight += 1;

    // Save reservation and mess
    await reservation.save();
    await mess.save();

    // Update attendance in enrollment schema
    const existingAttendance = enrollment.attendance.find(entry =>
      new Date(entry.date).toDateString() === todayStart.toDateString()
    );

    if (existingAttendance) {
      existingAttendance.attendedNight = true;
    } else {
      enrollment.attendance.push({
        date: todayStart,
        attendedDay: false,
        attendedNight: true,
      });
    }

    await enrollment.save();

    // Final response
    res.json({ message: 'Dinner reservation confirmed' });

  } catch (error) {
    console.error('Error in night attendance:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});




module.exports = messRouter;
