const mongoose = require("mongoose");

const HackathonSchema = new mongoose.Schema({
  company: String,
  name: String,
  theme: String,
  techStack: [String],
  status: String,
  logo: String,
  applyLink: String
});

module.exports = mongoose.model("Hackathon", HackathonSchema);
