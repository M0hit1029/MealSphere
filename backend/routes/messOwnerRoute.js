const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const messOwnerRouter = express.Router();
const messOwnerModel = require("../models/messOwnerSchema");
const enrollmentModel = require("../models/enrollmentSchema");
const messModel = require("../models/messSchema");
const messOwnerAuth = require("../middlewares/messOwnerAuth");
const dotenv = require("dotenv");
const moment = require("moment-timezone");

dotenv.config();
app.use(express.json());
app.use(cookieParser());

// Helper: Get current IST date range
const getISTDayRange = () => {
  const startOfDay = moment().tz("Asia/Kolkata").startOf("day").toDate();
  const endOfDay = moment().tz("Asia/Kolkata").endOf("day").toDate();
  return { startOfDay, endOfDay };
};

messOwnerRouter.post("/signup", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    console.log("Received signup request:", req.body);

    const existingOwner = await messOwnerModel.findOne({ email });
    if (existingOwner) return res.status(400).json({ message: "Email already in use" });

    const newUser = await messOwnerModel.create({ name, email, password, phone });

    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.MESS_JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("messToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

messOwnerRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await messOwnerModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await user.comparePasswords(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.MESS_JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("messToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

messOwnerRouter.get("/auth/me", async (req, res) => {
  try {
    const token = req.cookies.messToken;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.MESS_JWT_SECRET);
    if (!decoded) return res.status(403).json({ message: "Invalid token" });

    return res.status(200).json({ message: "Authorized" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

messOwnerRouter.post("/logout", (req, res) => {
  res.clearCookie("messToken", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });
  res.status(200).json({ message: "Logged out successfully" });
});

messOwnerRouter.get("/:messId/members", messOwnerAuth, async (req, res) => {
  try {
    const { messId } = req.params;
    const mess = await messModel.findById(messId);
    if (!mess) return res.status(404).json({ message: "Mess not found" });

    if (mess.messOwnerId.toString() !== req.messOwnerId)
      return res.status(403).json({ message: "Unauthorized" });

    const acceptedMembers = await enrollmentModel.find({
      messId,
      isAccepted: true,
    }).populate("userId", "name email");

    const pendingRequests = await enrollmentModel.find({
      messId,
      isAccepted: false,
    }).populate("userId", "name email");

    res.json({ acceptedMembers, pendingRequests });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

messOwnerRouter.put("/enrollment/:enrollmentId/accept", messOwnerAuth, async (req, res) => {
  try {
    const { enrollmentId } = req.params;
    const enrollment = await enrollmentModel.findById(enrollmentId);
    if (!enrollment) return res.status(404).json({ message: "Enrollment not found" });

    const mess = await messModel.findById(enrollment.messId);
    if (!mess) return res.status(404).json({ message: "Mess not found" });

    if (mess.messOwnerId.toString() !== req.messOwnerId)
      return res.status(403).json({ message: "Unauthorized" });

    enrollment.isAccepted = true;
    enrollment.acceptedAt = moment().tz("Asia/Kolkata").toDate(); // IST timestamp
    await enrollment.save();

    res.json({ message: "Member accepted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

messOwnerRouter.delete("/enrollment/:enrollmentId/reject", messOwnerAuth, async (req, res) => {
  try {
    const { enrollmentId } = req.params;
    const { messId } = req.query;

    const enrollment = await enrollmentModel.findById(enrollmentId);
    if (!enrollment) return res.status(404).json({ message: "Enrollment not found" });

    const mess = await messModel.findById(messId);
    if (!mess) return res.status(404).json({ message: "Mess not found" });

    if (mess.messOwnerId.toString() !== req.messOwnerId)
      return res.status(403).json({ message: "Unauthorized" });

    await enrollmentModel.findByIdAndDelete(enrollmentId);
    res.json({ message: "Enrollment request rejected" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

messOwnerRouter.get("/profile", messOwnerAuth, async (req, res) => {
  try {
    const messOwner = await messOwnerModel.findById(req.messOwnerId);
    if (!messOwner) return res.status(404).json({ message: "Mess owner not found" });

    res.status(200).json({ messOwner });
  } catch (error) {
    console.error("Error fetching mess owner profile:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

messOwnerRouter.put("/profile/update", messOwnerAuth, async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const messOwner = await messOwnerModel.findById(req.messOwnerId);
    if (!messOwner) return res.status(404).json({ message: "Mess owner not found" });

    messOwner.name = name || messOwner.name;
    messOwner.email = email || messOwner.email;
    messOwner.phone = phone || messOwner.phone;

    messOwner.updatedAt = moment().tz("Asia/Kolkata").toDate(); // IST timestamp

    await messOwner.save();
    res.status(200).json({ message: "Profile updated successfully", messOwner });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

messOwnerRouter.delete("/profile/delete", messOwnerAuth, async (req, res) => {
  try {
    const messOwner = await messOwnerModel.findByIdAndDelete(req.messOwnerId);
    if (!messOwner) return res.status(404).json({ message: "Mess owner not found" });

    res.status(200).json({ message: "Profile deleted successfully" });
  } catch (error) {
    console.error("Error deleting profile:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = messOwnerRouter;
