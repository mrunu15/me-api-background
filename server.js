const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const profileRoutes = require("./routes/profile.routes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));
  
app.use("/api", profileRoutes);

// Root route (welcome message)
app.get("/", (req, res) => {
  res.send("✅ Backend is running! Available routes: /api/profile, /api/skills, /api/projects, /health");
});

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Backend is healthy 🚀" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
