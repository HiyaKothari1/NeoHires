const express = require("express");
const Internship = require("../models/Internship");

const router = express.Router();

// GET all internships
router.get("/", async (req, res) => {
  try {
    const internships = await Internship.find();
    res.json(internships);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
