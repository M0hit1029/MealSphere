const express = require("express");
const mongoose = require("mongoose");
const job = express.Router();
const dotenv = require("dotenv");
const moment = require("moment-timezone");

dotenv.config();

const Reservation = require("../models/reservationSchema");
const Enrollment = require("../models/enrollmentSchema"); // assuming this exists

// Helper: get IST start and end of day
const getISTDayRange = () => {
  const startOfDay = moment().tz("Asia/Kolkata").startOf("day").toDate();
  const endOfDay = moment().tz("Asia/Kolkata").endOf("day").toDate();
  return { startOfDay, endOfDay };
};

// POST: Generate reservations
job.post("/generateReservations", async (req, res) => {
  const { apikey } = req.body;

  if (apikey !== process.env.API_KEY_UPDATE_ATTENDANCE) {
    return res.status(403).json({ message: "Forbidden" });
  }

  try {
    const { startOfDay, endOfDay } = getISTDayRange();

    const enrollments = await Enrollment.find({
      isAccepted: true,
    });

    const mealOptions = ["day", "night", "both", "none"];
    const reservations = [];

    for (const enroll of enrollments) {
      const choice = mealOptions[Math.floor(Math.random() * mealOptions.length)];

      if (choice === "none") continue;

      if (choice === "both") {
        reservations.push(
          { userId: enroll.userId, messId: enroll.messId, date: startOfDay, mealType: "day" },
          { userId: enroll.userId, messId: enroll.messId, date: startOfDay, mealType: "night" }
        );
      } else {
        reservations.push({ userId: enroll.userId, messId: enroll.messId, date: startOfDay, mealType: choice });
      }
    }

    // Delete all reservations for today in IST
    await Reservation.deleteMany({ date: { $gte: startOfDay, $lte: endOfDay } });

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

// DELETE: Remove all reservations
job.delete("/deleteReservations", async (req, res) => {
  const { apikey } = req.body;

  if (apikey !== process.env.API_KEY_UPDATE_ATTENDANCE) {
    return res.status(403).json({ message: "Forbidden" });
  }

  try {
    const result = await Reservation.deleteMany({});
    res.json({
      message: "All reservations deleted successfully",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.error("[RESERVATION ERROR] Failed to delete:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = job;
