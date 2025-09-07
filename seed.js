const mongoose = require("mongoose");
const Profile = require("./models/profile.model");
require("dotenv").config();

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected. Seeding data...");

    const profile = {
      name: "Mrunal Patil",
      email: "mrunalpatil.1503@gmail.com",
      education: "B.Tech CSE - NIMS University (2021-2025), GPA: 7.8/10",
      skills: [
        { title: "MongoDB", description: "Database management", rating: 9 },
        { title: "Express.js", description: "Backend framework", rating: 8 },
        { title: "React.js", description: "Frontend library", rating: 9 },
        { title: "Node.js", description: "Server-side runtime", rating: 9 },
        { title: "HTML", description: "Basic Homepage", rating: 9 },
        { title: "CSS", description: "For Styling", rating: 9 },
        { title: "AWS", description: "Cloud services basics", rating: 5 },
        { title: "Docker", description: "Containerization basics", rating: 5 },
        { title: "CI/CD Pipeline", description: "Deployment automation", rating: 5 },
      ],
      projects: [
        {
          title: "Doctor’s App",
          description: "Healthcare portal for patient registration and appointment scheduling.",
          links: [],
          skillTag: ["MongoDB", "React", "Node.js", "MySQL"],
        },
        {
          title: "Wanderlust",
          description: "Airbnb-inspired booking platform with hotel & resort listings.",
          links: [],
          skillTag: ["Node.js", "Express.js", "MongoDB"],
        },
        {
          title: "Nature Nexus",
          description: "Deep learning app for fruit/vegetable recognition.",
          links: [],
          skillTag: ["python", "Deep Learning"],
        },
        {
          title: "Fullstack Stock Trading Platform",
          description: "Stock trading app with real-time price tracking and portfolio management.",
          links: [],
          skillTag: ["Node.js", "React", "MongoDB", "Chart.js"],
        },
      ],
      work: [],
      links: {
        github: "https://github.com/mrunu15",
        linkedin: "https://www.linkedin.com/in/mrunal-patil-1b40a532b/",
        portfolio: "",
      },
    };

    await Profile.deleteMany({});
    await Profile.create(profile);

    console.log(" Profile seeded successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
