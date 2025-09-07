const express = require("express");
const router = express.Router();
const Profile = require("../models/profile.model");

// GET full profile
router.get("/api/profile", async (req, res) => {
  try {
    const profile = await Profile.findOne({});
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET projects (optionally filter by skill)
router.get("/api/projects", async (req, res) => {
  try {
    const skill = req.query.skill;
    const profile = await Profile.findOne({});
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    let projects = profile.projects;

    if (skill) {
      const skillLower = skill.toLowerCase();
      projects = projects.filter((p) =>
        p.skillTag.some((tag) => tag.toLowerCase() === skillLower)
      );
    }

    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// GET top skills
router.get("/api/skills/top", async (req, res) => {
  try {
    const profile = await Profile.findOne({});
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    const topSkills = profile.skills
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);
    res.json(topSkills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET search
router.get("/api/search", async (req, res) => {
  try {
    const q = req.query.q?.toLowerCase();
    const profile = await Profile.findOne({});
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    const result = {
    profile: profile.name.toLowerCase().includes(q) ? profile : null,
    skills: profile.skills.filter((s) => s.title.toLowerCase().includes(q)),
    projects: profile.projects.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.skillTag.some((tag) => tag.toLowerCase().includes(q))
  ),
};


    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


