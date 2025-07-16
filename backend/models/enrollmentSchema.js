const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  messId: { type: mongoose.Schema.Types.ObjectId, ref: 'Mess', required: true },
  joinedAt: { type: Date, default: Date.now },
  isAccepted: { type: Boolean, default: false },
  attendance: [
    {
      date: { type: Date },
      attendedDay: { type: Boolean, default: false },
      attendedNight: { type: Boolean, default: false }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Enrollment', enrollmentSchema);
