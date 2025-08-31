const express = require("express");
const mongoose = require("mongoose");
const job = express.Router();
const dotenv = require("dotenv");
const moment = require("moment-timezone");
dotenv.config();

const Reservation = require("../models/reservationSchema");
const Enrollment = require("../models/enrollmentSchema"); // assuming this exists

job.post("/generateReservations", async (req, res) => {
  const { apikey } = req.body;
  if (apikey !== process.env.API_KEY_UPDATE_ATTENDANCE) {
    return res.status(403).json({ message: "Forbidden" });
  }

  try {
    // 🔑 Always use IST date (start of day in IST)
    const todayIST = moment().tz("Asia/Kolkata").startOf("day").toDate();

    const excludedUserId = new mongoose.Types.ObjectId(
      "6888c8ea36edd3574bd05b03"
    );

    const enrollments = await Enrollment.find({
      isAccepted: true,
      userId: { $ne: excludedUserId },
    });

    const mealOptions = ["day", "night", "both", "none"];
    const reservations = [];

    for (const enroll of enrollments) {
      const choice =
        mealOptions[Math.floor(Math.random() * mealOptions.length)];

      if (choice === "none") continue;

      if (choice === "both") {
        reservations.push({
          userId: enroll.userId,
          messId: enroll.messId,
          date: todayIST, // ✅ always IST
          mealType: "day",
        });
        reservations.push({
          userId: enroll.userId,
          messId: enroll.messId,
          date: todayIST, // ✅ always IST
          mealType: "night",
        });
      } else {
        reservations.push({
          userId: enroll.userId,
          messId: enroll.messId,
          date: todayIST, // ✅ always IST
          mealType: choice,
        });
      }
    }

    // ✅ Delete only IST-based reservations for today
    await Reservation.deleteMany({ date: todayIST });

    if (reservations.length > 0) {
      await Reservation.insertMany(reservations);
    }

    res.json({
      message: "Reservations generated for today (IST)",
      count: reservations.length,
    });
  } catch (error) {
    console.error("[RESERVATION ERROR] Failed to generate:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = job;
