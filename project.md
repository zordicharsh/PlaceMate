# PlaceMate Workspace Summary

## Stack
React 19, Vite, Tailwind CSS v4, React Router Dom v7, React Icons.

## File Tree
.
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── components/
    │   └── Navbar.jsx           # Main navigation bar (Login, Register buttons)
    ├── pages/
    │   ├── dashborad/           # Note: Folder is misspelled as "dashborad" in codebase
    │   │   ├── Jobgiver.jsx     # Job Giver dashboard page
    │   │   ├── Jobseeker.jsx    # Job Seeker dashboard page
    │   │   └── Navdashboard.jsx # Dashboard navigation menu (recruiter profile, links, logout)
    │   ├── Home.jsx             # Public home landing page
    │   ├── Login.jsx            # Sign-in page (Google & email forms)
    │   └── Register.jsx         # Sign-up page (toggles between Seeker and Giver details)
    ├── App.css                  # Empty stylesheet
    ├── App.jsx                  # Main routing config (Routes setup)
    ├── index.css                # Global CSS (Imports Tailwind CSS v4)
    └── main.jsx                 # React DOM entry point
