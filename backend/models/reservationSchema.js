const mongoose = require('mongoose');
const cron = require('node-cron'); // ✅ Make sure this is imported

const reservationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  messId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mess',
    required: true,
  },
  mealType: {
    type: String,
    enum: ['day', 'night', 'both'],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  }
}, {
  timestamps: true // adds createdAt and updatedAt fields
});

const Reservation = mongoose.model('Reservation', reservationSchema); // ✅ Declare model first

// ✅ Daily cleanup cron job for expired reservations
cron.schedule('0 0 * * *', async () => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // midnight

    const result = await Reservation.deleteMany({
      date: { $lt: today } // delete reservations from past days
    });

    console.log(`[CLEANUP] Deleted ${result.deletedCount} outdated reservations.`);
  } catch (error) {
    console.error('[CLEANUP ERROR] Failed to clean up reservations:', error);
  }
}, { timezone: 'UTC' });

module.exports = Reservation;
