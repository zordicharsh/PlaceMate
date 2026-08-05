import express from "express";
import { registerRecruiter } from "../controllers/registrationController.js";
import { login } from "../controllers/loginController.js";
import {
  createJob,
  getRecruiterJobs,
  toggleJobStatus,
  deleteJob,
} from "../controllers/jobController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import recruiterOnly from "../middleware/recruiterOnly.js";

const router = express.Router();

// Register Recruiter
router.post("/register", registerRecruiter);

// Login Recruiter
router.post("/login", login);

// Job Posting & Management
router.post("/createjob", authMiddleware, recruiterOnly, createJob);
router.get("/jobs", authMiddleware, recruiterOnly, getRecruiterJobs);
router.put("/jobs/:id", authMiddleware, recruiterOnly, toggleJobStatus);
router.delete("/jobs/:id", authMiddleware, recruiterOnly, deleteJob);

export default router;
