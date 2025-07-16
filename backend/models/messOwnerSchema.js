const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const messOwnerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    messId: { type: mongoose.Schema.Types.ObjectId, ref: "Mess",default: null}, // Reference to Mess
  },
  { timestamps: true }
);

messOwnerSchema.pre("save", async function(next){
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
})

messOwnerSchema.methods.comparePasswords = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

module.exports = mongoose.model("MessOwner", messOwnerSchema);
