import express from "express";
import { registerCandidate } from "../controllers/registrationController.js";
import { login } from "../controllers/loginController.js";
import { completeOnboarding } from "../controllers/onboardingController.js";

const router = express.Router();

// Register Candidate
router.post("/register", registerCandidate);

// Login Candidate
router.post("/login", login);

// Complete Onboarding Route
router.put("/complete-onboarding", completeOnboarding);

export default router;