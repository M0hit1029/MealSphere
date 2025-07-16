const Reservation = require('../models/reservationSchema'); // Adjust path

const reservationAuth = async (req, res, next) => {
  try {
    const { mealType } = req.body;
    const userId = req.userId;

    if (!['day', 'night'].includes(mealType)) {
      return res.status(400).json({ message: 'Invalid mealType. Must be "day" or "night"' });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Start of the day

    const existingReservation = await Reservation.findOne({
      userId,
      mealType,
      date: today
    });
    console.log(existingReservation);
    if (existingReservation) {
      return res.status(403).json({
        message: `You have already reserved a ${mealType} meal today.`
      }
      );
    }

    next();
  } catch (error) {
    console.error('Error in reservation middleware:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = reservationAuth;
