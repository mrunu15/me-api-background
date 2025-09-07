Me API Project – Frontend & Backend

This project consists of a React frontend and a Node.js + Express backend connected via MongoDB Atlas. The frontend fetches profile, skills, and projects data from the backend API.

GitHub Repositories

Frontend: https://github.com/mrunu15/me-api-frontend

Backend: https://github.com/mrunu15/me-api-background

Live URLs

render backend: https://me-api-background-hwdx.onrender.com

vercel frontend : https://me-api-background-frontend.vercel.app

Backend (Node.js + Express)
Architecture

Node.js + Express for server

MongoDB Atlas for database

Routes:

GET /api/profile → fetch full profile

GET /api/projects?skill= → fetch projects, optionally filtered by skill

GET /api/skills/top → fetch top 5 skills

GET /api/search?q= → search profile, skills, and projects

Backend (Node.js + Express)
Architecture
Client (React) → API Routes (Express) → MongoDB Atlas


API Routes:

Endpoint	Method	Description
/api/profile	GET	Fetch full profile
/api/projects?skill=	GET	Fetch projects, optionally filter by skill
/api/skills/top	GET	Fetch top 5 skills
/api/search?q=	GET	Search profile, skills, and projects
/health	GET	Simple backend health check

Setup

Clone the repo:

git clone https://github.com/mrunu15/me-api-background.git
cd me-api-background


Install dependencies:

npm install


Create a .env file:

PORT=5000
MONGO_URI=<your-mongodb-atlas-uri>


Run locally:

npm run dev    # uses nodemon
npm start      # runs normally


Deployed on Render (production):

URL: https://me-api-background-hwdx.onrender.com

Database Schema

Profile Model:

{
  "name": "string",
  "bio": "string",
  "skills": [
    { "title": "string", "rating": "number" }
  ],
  "projects": [
    { "title": "string", "description": "string", "skillTag": ["string"] }
  ]
}

Sample cURL Requests
# Get profile
curl https://me-api-background-hwdx.onrender.com/api/profile

# Get projects filtered by skill
curl https://me-api-background-hwdx.onrender.com/api/projects?skill=React.js

# Get top skills
curl https://me-api-background-hwdx.onrender.com/api/skills/top

# Search
curl https://me-api-background-hwdx.onrender.com/api/search?q=React

Known Limitations

No authentication (public API)

Single-profile support only

Some endpoints assume data exists; empty DB may return 404

GET /health → simple health check
