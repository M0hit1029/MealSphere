const mongoose = require('mongoose');

const mealLedgerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    messId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Mess',
      required: true,
    },
    messName: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
      index: true,
    },
    mealType: {
      type: String,
      enum: ['day', 'night'],
      required: true,
    },
    dishNames: {
      type: [String],
      default: [],
    },
    totalPrice: {
      type: Number,
      default: 0,
      min: 0,
    },
    reservationStatus: {
      type: String,
      enum: ['reserved', 'cancelled'],
      default: 'reserved',
    },
    attendanceStatus: {
      type: String,
      enum: ['attended', 'not_marked', 'not_applicable', 'cancelled'],
      default: 'not_marked',
    },
    source: {
      type: String,
      enum: ['daily_reservation', 'enrolled_attendance'],
      default: 'daily_reservation',
    },
  },
  { timestamps: true }
);

mealLedgerSchema.index({ userId: 1, date: -1 });
mealLedgerSchema.index({ userId: 1, messId: 1, date: 1, mealType: 1 }, { unique: true });

module.exports = mongoose.model('MealLedger', mealLedgerSchema);
