import express from "express";
import { registerCandidate, registerRecruiter } from "../controllers/registrationController.js";
import { login } from "../controllers/loginController.js";
import { completeOnboarding } from "../controllers/onboardingController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

console.log("User routes loaded");

// Register Routes
router.post("/register/candidate", registerCandidate);
router.post("/register/recruiter", registerRecruiter);

// Login Route
router.post("/login", login);

// Test Route
router.get("/test", (req, res) => {
  console.log("TEST ROUTE HIT");

  res.status(200).json({
    success: true,
    message: "Test route is working",
  });
});

router.get("/test", authMiddleware, (req, res) => {
    res.json(req.user);
});

// Complete Onboarding Route
router.put("/complete-onboarding", completeOnboarding);

console.log("Complete onboarding route registered");

export default router;