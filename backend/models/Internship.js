const mongoose = require("mongoose");

const InternshipSchema = new mongoose.Schema({
  company: String,
  name: String,
  role: String,
  type: String,
  eligibility: String,
  month: String,
  status: String,
  logo: String,
  applyLink: String
});

module.exports = mongoose.model("Internship", InternshipSchema);
