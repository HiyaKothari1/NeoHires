const express = require("express");
const Hackathon = require("../models/Hackathon");

const router = express.Router();

// GET all hackathons
router.get("/", async (req, res) => {
  try {
    const hackathons = await Hackathon.find();
    res.json(hackathons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
