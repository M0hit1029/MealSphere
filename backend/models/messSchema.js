const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  items: [{ type: String, required: true }],
});

const messSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dz1qj3x7h/image/upload/v1735681234/MealSphere/messDefaultImage.png",
    },
    liveLocation: {
      type: { type: String, enum: ['Point'], default: 'Point' },
      coordinates: { type: [Number], required: true }, // [longitude, latitude]
    },

    menu: {
      dayMeal: { dishes: [dishSchema] },
      nightMeal: { dishes: [dishSchema] },
    },

    capacity: {
      day: {
        limit: { type: Number, default: null, min: 0 },
        waitlistEnabled: { type: Boolean, default: false },
      },
      night: {
        limit: { type: Number, default: null, min: 0 },
        waitlistEnabled: { type: Boolean, default: false },
      },
    },

    messOwnerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'messowners',
      required: true,
    },

    // Today's attending counts — reset daily by cron
    attendingTodayDay: { type: Number, default: 0 },
    attendingTodayNight: { type: Number, default: 0 },

    // Today's absent counts for enrolled members who booked elsewhere — reset daily by cron
    absentTodayDay: { type: Number, default: 0 },
    absentTodayNight: { type: Number, default: 0 },
  },
  { timestamps: true }
);

messSchema.index({ liveLocation: '2dsphere' });

const Mess = mongoose.model('Mess', messSchema);

// Reset all daily counters at midnight IST
const schedule = require('node-schedule');
schedule.scheduleJob('0 0 * * *', async () => {
  try {
    await Mess.updateMany({}, {
      attendingTodayDay: 0,
      attendingTodayNight: 0,
      absentTodayDay: 0,
      absentTodayNight: 0,
    });
    console.log('Reset all daily counters for all messes');
  } catch (err) {
    console.error('Error resetting daily counters:', err);
  }
});

module.exports = Mess;