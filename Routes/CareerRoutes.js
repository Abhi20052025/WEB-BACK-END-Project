import express from "express";
import Career from "../Models/Career.js"; // Mongoose model
import { protect } from "../Middleware/authMiddleware.js"; // optional

const router = express.Router();

// POST new career application (open to public)
router.post("/", async (req, res) => {
  try {
    const career = await Career.create(req.body);
    res.status(201).json({ success: true, message: "Application submitted", data: career });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET all applications (optional, protected)
router.get("/", protect, async (req, res) => {
  try {
    const applications = await Career.find();
    res.status(200).json({ success: true, data: applications });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
