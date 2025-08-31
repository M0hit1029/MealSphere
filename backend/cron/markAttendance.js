const moment = require("moment-timezone");

async function updateAttendance() {
  try {
    // Get today’s date in IST
    const todayIST = moment().tz("Asia/Kolkata").startOf("day").toDate();

    const reservations = await Reservation.find({ date: todayIST });
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
        reservation && (reservation.mealType === "day" || reservation.mealType === "both");
      const attendedNight =
        reservation && (reservation.mealType === "night" || reservation.mealType === "both");

      return {
        updateOne: {
          filter: { _id: enrollment._id },
          update: {
            $push: {
              attendance: {
                date: todayIST,
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
