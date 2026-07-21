# PlaceMate Workspace Summary

## Stack

### Frontend
- **Framework & Tooling:** React 19, Vite, React Router DOM v7
- **Styling & Assets:** Tailwind CSS v4, React Icons
- **HTTP Client:** Axios

### Backend
- **Runtime & Framework:** Node.js, Express (v5.x)
- **Database Driver:** MySQL2
- **Authentication & Security:** JSON Web Token (JWT), Bcrypt
- **Development Tooling:** Nodemon

---

## File Tree

```
.
├── backend/                  # Backend Node/Express server code
│   ├── controllers/          # Request handlers and business logic
│   │   └── userController.js # Handles registration and login operations
│   ├── middleware/           # Custom middleware functions (currently empty)
│   ├── models/               # Database schemas and models (currently empty)
│   ├── routes/               # API route definitions
│   │   └── userRoutes.js     # User registration and login routing
│   ├── package.json          # Backend dependencies and script configurations
│   └── server.js             # Entry point for the Express server (runs on port 5000)
├── public/                   # Static public assets for the frontend
│   ├── favicon.svg           # Website icon
│   └── icons.svg             # SVG icon spritesheet
├── src/                      # Frontend React source code
│   ├── components/           # Reusable UI components
│   │   └── Navbar.jsx        # Main navigation bar (with Login and Register controls)
│   ├── pages/                # Page views
│   │   ├── dashborad/        # Dashboards (Note: Folder is misspelled as "dashborad" in codebase)
│   │   │   ├── Recruiter.jsx  # Recruiter dashboard page
│   │   │   ├── Candidate.jsx  # Candidate dashboard page
│   │   │   └── Navdashboard.jsx # Dashboard specific navigation/sidebar controls
│   │   ├── Home.jsx          # Public home landing page
│   │   ├── Login.jsx         # Sign-in page supporting email and Google login
│   │   └── Register.jsx      # Sign-up page (toggleable between Seeker/Giver views)
│   ├── App.css               # Currently empty stylesheet
│   ├── App.jsx               # App component setting up routing and paths
│   ├── index.css             # Main stylesheet importing Tailwind CSS v4
│   └── main.jsx              # React application entry point
├── package.json              # Frontend package.json with dependencies
├── vite.config.js            # Vite configuration including Tailwind CSS v4 plugin
└── eslint.config.js          # ESLint configuration
```
