const cron = require('node-cron');
const mongoose = require('mongoose');
const Enrollment = require('../models/enrollmentSchema');
const Reservation = require('../models/reservationSchema');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function updateAttendance() {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const reservations = await Reservation.find({ date: today });
    const reservationMap = {};
    reservations.forEach((r) => {
      if (!reservationMap[r.userId]) reservationMap[r.userId] = [];
      reservationMap[r.userId].push(r);
    });

    const enrollments = await Enrollment.find({});
    const bulkOps = enrollments.map((enrollment) => {
      const userReservations = reservationMap[enrollment.userId] || [];
      const reservation = userReservations.find(r => r.messId.toString() === enrollment.messId.toString());
      const attendedDay = reservation && (reservation.mealType === 'day' || reservation.mealType === 'both');
      const attendedNight = reservation && (reservation.mealType === 'night' || reservation.mealType === 'both');

      return {
        updateOne: {
          filter: { _id: enrollment._id },
          update: {
            $push: {
              attendance: {
                date: today,
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

    console.log('Daily attendance update complete');
  } catch (err) {
    console.error('Error during daily attendance update:', err);
  }
}

cron.schedule('0 0 * * *', () => {
  console.log('Running daily attendance update...');
  updateAttendance();
});
