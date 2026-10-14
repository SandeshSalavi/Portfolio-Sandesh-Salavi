# Sandesh Salavi — Personal AI Engineer & Software Developer Portfolio

A modern, responsive, high-performance personal engineering portfolio built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) and styled with **Tailwind CSS**.

Designed specifically for AI/ML engineering and software development internships, entry-level positions, and technical interviewer evaluations. Built strictly following verified credentials and engineering transparency—avoiding fabricated metrics, fake certifications, or unverified claims.

---

## 🚀 Live Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Lucide React, HTML5 Canvas API (Neural Lattice Visualization)
- **Backend API**: Node.js, Express.js, CORS, Input Sanitization & Validation Middleware
- **Database**: MongoDB via Mongoose *(includes graceful in-memory persistence fallback if MongoDB daemon is not running)*
- **Typography & Styling**: Inter & JetBrains Mono, Dark Navy Theme (`#060911`), Subtle Blue & Violet Gradients

---

## 📁 Project Directory Structure

```text
sandesh-salavi-portfolio/
├── client/                               # Frontend React + Vite Application
│   ├── public/
│   │   ├── assets/
│   │   │   └── projects/                 # Technical schematics & project screenshots
│   │   │       ├── advocate-dashboard-placeholder.svg
│   │   │       └── neurostage-architecture.svg
│   │   ├── favicon.svg                   # Custom SS monogram favicon
│   │   └── resume.pdf                    # Place your actual resume here
│   ├── src/
│   │   ├── components/
│   │   │   ├── AbstractAiVisual.jsx      # Tasteful canvas neural tensor graph
│   │   │   ├── About.jsx                 # Exact bio, focus pillars & education mini-card
│   │   │   ├── Contact.jsx               # Verified channels & real MERN contact form
│   │   │   ├── Education.jsx             # KIT College of Engineering (2027) & placeholders
│   │   │   ├── Footer.jsx                # Semantics, tech badges & back-to-top
│   │   │   ├── Hero.jsx                  # Header, headline, roles & action buttons
│   │   │   ├── Icons.jsx                 # Custom SVG brand icons (GitHub, LinkedIn)
│   │   │   ├── Navbar.jsx                # Sticky responsive header & mobile navigation
│   │   │   ├── PlaceholderModal.jsx      # Clean status modal for unverified links
│   │   │   ├── ProjectModal.jsx          # Comprehensive modal with all 8-9 editable fields
│   │   │   ├── Projects.jsx              # Featured cards: NeuroStage & Advocate Advisory
│   │   │   ├── ResumeAchievements.jsx    # Resume view/download & verified honors container
│   │   │   └── Skills.jsx                # 4 categories, badges, zero fake percentages
│   │   ├── data/
│   │   │   └── portfolioData.js          # Single source of truth (edit your data here)
│   │   ├── services/
│   │   │   └── api.js                    # API client with automatic offline fallback
│   │   ├── App.jsx                       # Root application component
│   │   ├── index.css                     # Tailwind CSS & custom utilities
│   │   └── main.jsx                      # React entrypoint
│   ├── index.html                        # SEO meta tags, title & fonts
│   ├── tailwind.config.js                # Custom dark palette & animations
│   ├── vite.config.js                    # Proxy configured to backend on :5000
│   └── package.json
│
├── server/                               # Backend Node.js & Express API
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js                     # MongoDB connection with in-memory fallback
│   │   ├── controllers/
│   │   │   ├── contactController.js      # Form validation & message persistence
│   │   │   └── portfolioController.js    # Data caching & health checks
│   │   ├── data/
│   │   │   └── seedData.json             # Structured backup & backend seed data
│   │   ├── models/
│   │   │   └── ContactMessage.js         # Mongoose schema for contact messages
│   │   ├── routes/
│   │   │   ├── contactRoutes.js          # POST /api/contact, GET /api/contact
│   │   │   └── portfolioRoutes.js        # GET /api/portfolio/data, health, resume
│   │   └── server.js                     # Express app setup, CORS, route mounting
│   ├── .env.example                      # Environment variables template
│   └── package.json
│
├── .gitignore                            # Git ignore rules
├── package.json                          # Root orchestration (concurrent dev scripts)
└── README.md                             # Comprehensive documentation
```

---

## 🛠️ Installation & Setup Instructions

### 1. Prerequisites
- **Node.js** (v18.0.0 or higher, tested on Node.js v22)
- **npm** (v9.0.0 or higher)
- *(Optional)* **MongoDB** (Local `mongod` service or a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster URI). If MongoDB is omitted, the backend will automatically run with an in-memory store so you can test immediately without any database setup!

### 2. Install All Dependencies
From the repository root folder (`sandesh-salavi-portfolio/`), run:

```bash
npm run install:all
```

Or install individual workspaces manually:
```bash
# Root dependencies
npm install

# Backend dependencies
cd server && npm install && cd ..

# Frontend dependencies
cd client && npm install && cd ..
```

---

## 💻 Development & Build Commands

| Command | Working Directory | Description |
| :--- | :--- | :--- |
| `npm run dev` | Root | Runs **both** Express Backend (`:5000`) and Vite React Client (`:5173`) concurrently with live reload. |
| `npm run client` | Root | Runs only the Vite React development server (`http://localhost:5173`). |
| `npm run server` | Root | Runs only the Express backend API (`http://localhost:5000`). |
| `npm run build` | Root | Compiles production assets in `client/dist/` with full tree-shaking and minification. |
| `npm start` | Root | Starts the Node.js production server. |

---

## 📝 How to Update Your Profile, Skills & Projects

All client-facing content is managed centrally in **`client/src/data/portfolioData.js`**. You do not need to alter complex JSX to update your information.

### 1. Updating Profile & Target Roles
Open `client/src/data/portfolioData.js`:
```javascript
export const portfolioData = {
  profile: {
    name: "Sandesh Salavi",
    headline: "Building Intelligent Solutions with AI & Software Engineering",
    email: "sandeshsalavi3@gmail.com",
    github: "https://github.com/SandeshSalavi",
    linkedin: {
      username: "SandeshSalavi",
      url: "https://www.linkedin.com/in/YOUR_ACTUAL_USERNAME", // <-- Replace when ready
      isVerified: true
    },
    ...
```

### 2. Updating Project Details & Benchmark Results
Each project has explicit, designated fields:
- **`NeuroStage`** (`projects[0]`):
  - `problemStatement`: Sleep stage classification challenge & clinical context
  - `myContribution`: Data pipeline, EEG filtering, model architecture implementation
  - `datasetAndPreprocessing`: Dataset name (e.g. Sleep-EDF), filter frequencies, epoch size
  - `modelArchitecture`: 1D-CNN, BiLSTM, XGBoost, etc.
  - `trainingAndEvaluation`: Loss functions, cross-validation methodology
  - `results`: Add verified accuracy, F1-scores, and confusion matrix metrics once benchmarks are finalized
  - `github.url`: Set repo link once public
  - `liveDemo.url`: Set inference demo link once deployed
- **`Advocate Advisory System`** (`projects[1]`):
  - `features`: Array of implemented legal workflow modules
  - `technologyStack`: List of utilized libraries and databases
  - `architecture`: Description of MERN system tiers
  - `github.url` & `liveDemo.url`: URLs once released

### 3. Adding Your Real Resume
1. Export your resume as a standard PDF file named **`resume.pdf`**.
2. Save it directly into the directory: **`client/public/resume.pdf`**.
3. In `client/src/data/portfolioData.js`, set:
   ```javascript
   resume: {
     fileName: "Sandesh_Salavi_Resume.pdf",
     filePath: "/resume.pdf",
     isAvailable: true, // <-- Change to true
   }
   ```
4. Both the **"Download Resume"** and **"View Resume"** buttons will immediately open/download your actual PDF!

### 4. Adding Project Screenshots
1. Save your project screenshots into `client/public/assets/projects/` (e.g. `advocate-screen-1.png`).
2. Reference the path in `portfolioData.js` under `projects[1].fields.screenshots`.

---

## 🌐 Deploying the Portfolio

### Option A: Static Frontend on Vercel + Backend on Render/Railway (Recommended)
1. **Frontend (Vercel)**:
   - Connect your GitHub repository to [Vercel](https://vercel.com).
   - Set **Root Directory** to `client`.
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Add environment variable `VITE_API_URL` pointing to your deployed backend.
2. **Backend (Render or Railway)**:
   - Create a Web Service pointing to the `server` directory.
   - Build Command: `npm install`
   - Start Command: `node src/server.js`
   - Add Environment Variables:
     - `PORT=5000`
     - `CLIENT_URL=https://your-portfolio-domain.vercel.app`
     - `MONGO_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/portfolio` (Free MongoDB Atlas cluster)

### Option B: Monolithic Deployment on Render
1. In Render, create a Web Service from the repository root.
2. Build Command: `npm run install:all && npm run build`
3. Serve static files from `client/dist` inside `server/src/server.js`.

---

## 🐙 Publishing to GitHub

```bash
# 1. Initialize git (if not already done)
git init

# 2. Add files
git add .

# 3. Commit
git commit -m "feat: complete MERN stack personal AI & SWE portfolio for Sandesh Salavi"

# 4. Link your GitHub remote
git remote add origin https://github.com/SandeshSalavi/sandesh-salavi-portfolio.git

# 5. Push to GitHub
git branch -M main
git push -u origin main
```

---

## ✅ Quality, Accessibility & Performance Checklist

- [x] **Zero Fabricated Qualifications**: No invented grades, fake awards, fake certifications, or unverified claims.
- [x] **Honest Disclaimers**: NeuroStage is clearly labeled as an academic research prototype and not a clinically certified medical system.
- [x] **Working MERN Backend**: Form inputs are validated on the server with schema validation and real persistence in MongoDB (with automatic in-memory fallback).
- [x] **Clean Dark Aesthetics**: Near-black background (`#060911`), blue (`#3b82f6`) and violet (`#8b5cf6`) accents, clean typography with Inter and JetBrains Mono.
- [x] **Accessibility**: Respects `prefers-reduced-motion`, includes semantic HTML5 tags (`<header>`, `<main>`, `<section>`, `<footer>`), ARIA attributes, and high contrast ratios.
- [x] **Responsive Layout**: Fluid breakpoints tested across Mobile (375px+), Tablet (768px+), and Desktop (1024px+).
- [x] **SEO Optimized**: Open Graph meta tags, descriptive title, keywords, and SVG favicon included.
