const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    image: {type:String, default: 'https://res.cloudinary.com/dz1qj3x8h/image/upload/v1735681234/MealSphere/default_user.png'},
    liveLocation: {
      type: { type: String, enum: ['Point'], default: 'Point' },
      coordinates: { type: [Number], default: [0, 0] },
    },

    role: {
      type: String,
      enum: ['member', 'daily'],
      default: 'daily',
      required: true,
    },

    messId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Mess',
      default: null,
    },
  },
  { timestamps: true }
);

// Password hashing
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Geo index
userSchema.index({ liveLocation: '2dsphere' });

module.exports = mongoose.model('User', userSchema);
