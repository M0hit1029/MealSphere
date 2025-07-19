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
//const enrollmentSchema = require("../models/enrollmentSchema");
dotenv.config();

app.use(express.json());

messOwnerRouter.post("/signup", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    console.log("Received signup request:", req.body);
    // Check if email already exists
    const existingOwner = await messOwnerModel.findOne({ email });
    if (existingOwner) {
      return res.status(400).json({ message: "Email already in use" });
    }
    const newUser = await messOwnerModel.create({ name, email, password, phone });

const token = jwt.sign(
  { userId: newUser._id, email: newUser.email },
  process.env.MESS_JWT_SECRET,
  { expiresIn: "1d" }
);
    console.log("Generated token:", token);
    res.cookie("messToken", token, {
      httpOnly: true,
      secure: true, // Secure in production (HTTPS)
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

messOwnerRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await messOwnerModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare passwords
    const isMatch = await user.comparePasswords(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.MESS_JWT_SECRET,
      { expiresIn: "1d" } // Token expires in 7 days
    );

    res.cookie("messToken", token, {
      httpOnly: true,
      secure: true, // Secure in production (HTTPS)
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

messOwnerRouter.get('/auth/me', async (req,res)=>{
    try{
        const token = req.cookies.messToken;
        if(!token){
            return res.status(401).json({message:"Unauthorized"});
        }
        const decoded = jwt.verify(token,process.env.MESS_JWT_SECRET);
        if(!decoded){
            return res.status(403).json({message:"Invalid token"});
        }
        else{
            return res.status(200).json({message:"Authorized"});
        }
    }
    catch(error){
        res.status(500).json({message:"Internal server error"});
    }
})

messOwnerRouter.post("/logout",(req,res)=>{
    res.clearCookie('messToken');
    res.status(200).json({message:'Logged out successfully'});
})

messOwnerRouter.get("/:messId/members", messOwnerAuth, async (req, res) => {
  try {
    const { messId } = req.params;
    console.log("in the members route", messId);
    //Verify mess exists and user is owner
    const mess = await messModel.findById(messId);
    if (!mess) {
      return res.status(404).json({ message: "Mess not found" });
    }
    //console.log("mess found", req.messOwnerId, mess.messOwnerId);
    if (mess.messOwnerId.toString() !== req.messOwnerId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // Get accepted members
    const acceptedMembers = await enrollmentModel.find({
      messId,
      isAccepted: true,
    }).populate("userId", "name email");

    // Get pending requests
    const pendingRequests = await enrollmentModel.find({
      messId,
      isAccepted: false,
    }).populate("userId", "name email");

    res.json({
      acceptedMembers,
      pendingRequests,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

messOwnerRouter.put("/enrollment/:enrollmentId/accept", messOwnerAuth, async (req, res) => {
  try {
    const { enrollmentId } = req.params;

    const enrollment = await enrollmentModel.findById(enrollmentId);
    if (!enrollment) {
      return res.status(404).json({ message: "Enrollment not found" });
    }

    // Verify user is mess owner
    const mess = await messModel.findById(enrollment.messId);
    if (!mess) {
      return res.status(404).json({ message: "Mess not found" });
    }
    if (mess.messOwnerId.toString() !== req.messOwnerId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    enrollment.isAccepted = true;
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
    const { messId } = req.query; // Get messId from query parameters
    const enrollment = await enrollmentModel.findById(enrollmentId);
    if (!enrollment) {
      return res.status(404).json({ message: "Enrollment not found" });
    }

    // Verify user is mess owner
    const mess = await messModel.findById(messId);
    if (!mess) {
      return res.status(404).json({ message: "Mess not found" });
    }
    //console.log("mess found", req.messOwnerId, mess.messOwnerId);
    if (mess.messOwnerId.toString() !== req.messOwnerId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await enrollmentModel.findByIdAndDelete(enrollmentId);
    res.json({ message: "Enrollment request rejected" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = messOwnerRouter;
