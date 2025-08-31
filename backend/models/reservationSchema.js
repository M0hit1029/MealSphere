const mongoose = require('mongoose');
const cron = require('node-cron');

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
  timestamps: true 
});

const Reservation = mongoose.model('Reservation', reservationSchema);

reservationSchema.pre('save', function (next) {
  if (this.date) {
    this.date = moment(this.date).tz("Asia/Kolkata").startOf("day").toDate();
  } else {
    // If no date provided, default to today in IST
    this.date = moment().tz("Asia/Kolkata").startOf("day").toDate();
  }
  next();
});

cron.schedule('0 0 * * *', async () => {
  try {
    const todayIST = moment().tz("Asia/Kolkata").startOf("day").toDate();

    const result = await Reservation.deleteMany({
      date: { $lt: todayIST }
    });

    console.log(`[CLEANUP] Deleted ${result.deletedCount} outdated reservations.`);
  } catch (error) {
    console.error('[CLEANUP ERROR] Failed to clean up reservations:', error);
  }
}, { timezone: 'Asia/Kolkata' });

module.exports = Reservation;
