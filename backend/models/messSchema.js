const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  items: [{ type: String, required: true }],
});

const messSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    image: {type:String,default:"https://res.cloudinary.com/dz1qj3x7h/image/upload/v1735681234/MealSphere/messDefaultImage.png"},
    liveLocation: {
      type: { type: String, enum: ['Point'], default: 'Point' },
      coordinates: { type: [Number], required: true }, // [longitude, latitude]
    },

    menu: {
      dayMeal: { dishes: [dishSchema] },
      nightMeal: { dishes: [dishSchema] },
    },

    messOwnerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'messowners',
      required: true,
    },
    attendingTodayDay: {
      type: Number,
      default: 0,
    },
    attendingTodayNight: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Create 2dsphere index for location-based queries
messSchema.index({ liveLocation: '2dsphere' });

/**
 * Optional: Reset attendingToday count every day at midnight
 * (Only if you are tracking attendance count separately)
 */
const schedule = require('node-schedule');
schedule.scheduleJob('0 0 * * *', async () => {
  await mongoose.model('Mess').updateMany({}, { attendingTodayDay: 0 },{attendingTodayNight: 0});
  console.log('✅ Reset attendingToday count for all messes');
});

module.exports = mongoose.model('Mess', messSchema);
