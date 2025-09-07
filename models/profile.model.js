const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  links: [String],
  skillTag: [String],  // new: tags for searching
});

const SkillSchema = new mongoose.Schema({
  title: String,
  description: String,
  rating: Number, // new: 1-10 rating
});

const WorkSchema = new mongoose.Schema({
  company: String,
  role: String,
  duration: String,
});

const ProfileSchema = new mongoose.Schema({
  name: String,
  email: String,
  education: String,
  skills: [SkillSchema],
  projects: [ProjectSchema],
  work: [WorkSchema],
  links: {
    github: String,
    linkedin: String,
    portfolio: String,
  },
});

module.exports = mongoose.model("Profile", ProfileSchema);
