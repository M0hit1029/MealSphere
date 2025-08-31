const moment = require("moment-timezone");
const Reservation = require("../models/reservationSchema");
const Enrollment = require("../models/enrollmentSchema");

async function updateAttendance() {
  try {
    // Get today's start and end time in IST
    const startOfDayIST = moment().tz("Asia/Kolkata").startOf("day").toDate();
    const endOfDayIST = moment().tz("Asia/Kolkata").endOf("day").toDate();

    // Find reservations for today (date within IST range)
    const reservations = await Reservation.find({
      date: { $gte: startOfDayIST, $lte: endOfDayIST },
    });

    const reservationMap = {};
    reservations.forEach((r) => {
      if (!reservationMap[r.userId]) reservationMap[r.userId] = [];
      reservationMap[r.userId].push(r);
    });

    const enrollments = await Enrollment.find({});
    const bulkOps = enrollments.map((enrollment) => {
      const userReservations = reservationMap[enrollment.userId] || [];
      const reservation = userReservations.find(
        (r) => r.messId.toString() === enrollment.messId.toString()
      );

      const attendedDay =
        reservation &&
        (reservation.mealType === "day" || reservation.mealType === "both");
      const attendedNight =
        reservation &&
        (reservation.mealType === "night" || reservation.mealType === "both");

      return {
        updateOne: {
          filter: { _id: enrollment._id },
          update: {
            $push: {
              attendance: {
                date: startOfDayIST,
                attendedDay: attendedDay || false,
                attendedNight: attendedNight || false,
              },
            },
          },
        },
      };
    });

    if (bulkOps.length > 0) {
      await Enrollment.bulkWrite(bulkOps);
    }

    console.log("Daily attendance update complete");
  } catch (err) {
    console.error("Error during daily attendance update:", err);
  }
}

module.exports = updateAttendance;
