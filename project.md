# PlaceMate Workspace Summary

PlaceMate is a job placement and recruitment application featuring separate workflows and dashboards for **Candidates (Job Seekers)** and **Recruiters (Employers)**.

---

## Tech Stack

### Frontend
- **Framework & Tooling:** React 19, Vite, React Router DOM v7
- **Styling:** Tailwind CSS v4, React Icons
- **HTTP Client:** Axios (for connecting to the Express backend API)
- **Data Persistence:** Local Storage (saves JWT token and user profile details upon login)

### Backend
- **Runtime & Framework:** Node.js, Express (v5.x)
- **Database Driver:** MySQL2 (`mysql2/promise` used for connection pooling)
- **Authentication & Security:** JSON Web Token (JWT) for session management, Bcrypt for password hashing
- **Development Tooling:** Nodemon for hot reloading

---

## Database Configuration & Inferred Schema

The backend connects to a MySQL database hosted on Railway using configuration loaded from `backend/.env`.

### Environment Variables
- `DB_HOST`: Database hostname (Railway proxy)
- `DB_PORT`: Database port
- `DB_USER`: Database username
- `DB_PASSWORD`: Database password
- `DB_NAME`: Database schema name
- `JWT_SECRET`: Secret key used for signing JWT tokens

### Database Tables
1. **`candidates`**:
   - `id`: Auto-incrementing identifier.
   - `name`: Candidate's full name.
   - `email`: Candidate's email address (unique).
   - `password`: Hashed candidate password.
   - `onboardingCompleted`: Tinyint (0/1) representing whether profile onboarding has been finished.
2. **`recruiters`**:
   - `id`: Auto-incrementing identifier.
   - `name`: Recruiter's full name.
   - `email`: Recruiter's email address (unique).
   - `password`: Hashed recruiter password.
   - `orgname`: Recruiter's organization/company name.
   - `designation`: Recruiter's job title/role.
   - `tel`: Contact phone number.
3. **`jobs`**:
   - `id`: Auto-incrementing identifier.
   - `recruiter_id`: Foreign key matching the recruiter who posted the job.
   - `job_title`: Title of the job opening.
   - `job_description`: Detailed description of the role.
   - `experience_years`: Required experience in years.
   - `required_skills`: Comma-separated list of skills.
   - `job_type`: Type of job (Full-time, Part-time, Contract, Internship).
   - `work_mode`: Workplace setting (On-site, Remote, Hybrid).
   - `salary`: Annual salary package.
   - `location`: Geographic location of the role.
   - `application_deadline`: Application closing date.
   - `vacancies`: Number of candidate openings.
   - `status`: Active status (open / closed).
   - `created_at`: Database-only creation timestamp.
   - `updated_at`: Database-only last update timestamp.

---

## Workspace Directory & File Tree

Below is the complete project directory structure with descriptions of major directories and files:

```
.
├── backend/                       # Node.js/Express server source code
│   ├── config/
│   │   └── db.js                  # Database connection module using dotenv variables
│   ├── controllers/               # Express request handlers & business logic
│   │   ├── jobController.js       # Handles job creation and management in database
│   │   ├── loginController.js     # Unified login handler (authenticates both tables)
│   │   ├── onboardingController.js# Updates onboardingCompleted status for candidates
│   │   └── registrationController.js # Separate candidate and recruiter signup handlers
│   ├── mysql/
│   │   └── db.js                  # Backup/legacy database connection module with hardcoded credentials
│   ├── routes/
│   │   ├── jobRoutes.js           # API endpoints for job posting (JWT verified)
│   │   └── userRoutes.js          # API endpoints for registration, login, and onboarding
│   ├── .env                       # Backend local configuration (DB details, JWT secret)
│   ├── package.json               # Backend dependencies & script configurations
│   └── server.js                  # Entry point for the Express server (default port 5000)
├── public/                        # Static assets for the frontend
│   ├── favicon.svg                # Browser tab icon
│   └── icons.svg                  # SVG icon spritesheet
├── src/                           # Frontend React source code
│   ├── components/                # Reusable global React components
│   │   └── Navbar.jsx             # Public header navigation bar (Login & Register links)
│   ├── pages/                     # Routed page views
│   │   ├── dashborad/             # Misspelled dashboard directory
│   │   │   ├── CandidateComponent/# Components for the Candidate dashboard area
│   │   │   │   ├── Candidate.jsx  # Candidate home dashboard (job recommendations UI)
│   │   │   │   ├── CandidateOnboarding.jsx # Entry page wrapping the onboarding steps
│   │   │   │   ├── EducationForm.jsx # Step 2 of onboarding (captures educational data)
│   │   │   │   ├── navbar.jsx     # Nav bar for candidate dashboard pages
│   │   │   │   ├── sidebar.jsx    # Side navigation drawer for candidate pages
│   │   │   │   ├── OnboardingNavbar.jsx # Navigation header for candidate onboarding flow
│   │   │   │   ├── ProfileProgress.jsx # Renders current profile completion percentages
│   │   │   │   ├── StatsCards.jsx # Metric summary widgets for candidate views
│   │   │   │   └── StepSidebar.jsx# Steps display sidebar for onboarding checklist
│   │   │   └── RecruiterComponent/# Components for the Recruiter dashboard area
│   │   │       ├── Applicants.jsx # Main wrapper for the recruiter applicants view
│   │   │       ├── ApplicantsList.jsx # Detailed table of candidate applicants
│   │   │       ├── InterviewsList.jsx # Widget displaying upcoming interview schedules
│   │   │       ├── JobPostForm.jsx# Interactive form for publishing job openings
│   │   │       ├── JobsList.jsx   # List of jobs posted by the company (detailed status)
│   │   │       ├── MyJobs.jsx     # Main wrapper for the posted jobs view
│   │   │       ├── PostJob.jsx    # Main wrapper for job posting page view
│   │   │       ├── ProfileSettings.jsx # Form view to update recruiter/org profile details
│   │   │       ├── RecentApplicants.jsx # Dashboard card for quick review of new applications
│   │   │       ├── RecruiterDashboard.jsx # Recruiter home dashboard overview
│   │   │       ├── RecruiterHeader.jsx # Header nav bar for recruiter pages
│   │   │       ├── RecruiterSidebar.jsx # Sidebar controller containing links to recruiter sections
│   │   │       └── StatsCards.jsx # Recruiter metric widgets (posted jobs, applications, etc.)
│   │   ├── CandidateRegister.jsx  # Candidate signup page (submits to /register/candidate)
│   │   ├── Home.jsx               # Landing page view
│   │   ├── Login.jsx              # Unified login page (determines role & onboarding status on load)
│   │   ├── RecruiterRegister.jsx  # Recruiter signup page (submits to /register/recruiter)
│   │   └── Register.jsx           # Sign-up role selector dashboard
│   ├── App.css                    # Global application styles
│   ├── App.jsx                    # Core application setup & client routing declarations
│   ├── index.css                  # Tailwinds CSS v4 imports & standard styling defaults
│   └── main.jsx                   # React application root render bootstrap
├── package.json                   # Frontend dependencies, build & dev execution configurations
├── vite.config.js                 # Vite compiler config file with Tailwind CSS plugin
└── eslint.config.js               # ESLint code style configuration
```

---

## Routing & App Navigation

### Public Routes
- **`/`**: Displays the [Navbar](file:///c:/project/Placemate/placemate/src/components/Navbar.jsx) with links to login and register.
- **`/login`**: Sign-in page. Calls `/api/users/login`.
  - On successful auth:
    - Sets `token` and `user` object in `localStorage`.
    - If `userType` is `2` (Candidate): Checks `user.onboardingCompleted`.
      - If true: Navigates to `/dashboard/candidate`.
      - If false: Navigates to `/dashboard/CandidateComponent/CandidateOnboarding`.
    - If `userType` is `1` (Recruiter): Navigates to `/dashboard/recruiter`.
- **`/register`**: Simple selection screen giving user choice to register as Candidate or Recruiter.
- **`/register/candidate`**: Signup form asking for `name`, `email`, and `password`. Submits to `/api/users/register/candidate` and redirects to `/login`.
- **`/register/recruiter`**: Signup form asking for `name`, `email`, and `password`, `tel`, `orgname`, and `designation`. Submits to `/api/users/register/recruiter`.

### Candidate Routes
- **`/dashboard/candidate`**: Displays candidate statistics, profile progress, and job recommendations.
- **`/dashboard/CandidateComponent/CandidateOnboarding`**: Step-based profile builder. Currently presents an `EducationForm` which triggers API requests to update the candidate profile database.

### Recruiter Routes
- **`/dashboard/recruiter`**: Recruiter landing board displaying stats and recent applicants list.
- **`/recruiter/post-job`**: Page allowing job creation using `JobPostForm`.
- **`/recruiter/applicants`**: Displays candidates list who applied for jobs.
- **`/recruiter/my-jobs`**: View current listings status.
- **`/recruiter/profile`**: Edit recruiter company details.

---

## Known Bugs & Pending Tasks

Other AI developers should be aware of the following issues when reading or working on this codebase:

1. **Folder Spelled Incorrectly:**
   - The directory housing the candidate and recruiter components is named `dashborad` instead of `dashboard`. All imports in `App.jsx` and other files reference `dashborad`.

2. **Backend Recruiter Registration Response Bug:**
   - In [registrationController.js](file:///c:/project/Placemate/placemate/backend/controllers/registrationController.js#L62-L65), the `registerRecruiter` endpoint responds with a successful status `201` but returns `"success": false` in the JSON response payload. This causes frontend validation to fail or react incorrectly if it checks `response.data.success`.

3. **Frontend Recruiter Registration Async/Await Bug:**
   - In [RecruiterRegister.jsx](file:///c:/project/Placemate/placemate/src/pages/RecruiterRegister.jsx#L29-L49), the `handleSubmit` function is not an `async` function. The database submission is initiated via `axios.post()` but is not awaited (`await`). Furthermore, unlike `CandidateRegister.jsx`, there is no redirect to the login page or success notification after submission.

4. **Mocked Features:**
   - **Jobs & Applicants Lists:** Recruiter subpages (My Jobs, Applicants, etc.) are built with static/mock tables and are not yet connected to backend endpoints.
   - **Candidate Profile Details:** Candidate details and education are not stored in separate database tables yet. The onboarding form only toggles the `onboardingCompleted` flag to `1` in the database.
