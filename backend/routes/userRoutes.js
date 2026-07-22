import express from "express";
import { registerCandidate,registerRecruiter } from "../controllers/registrationController.js";
import { login } from "../controllers/loginController.js";

const router = express.Router();


router.post("/register/candidate", registerCandidate);
router.post("/register/Recruiter", registerRecruiter);
router.post("/login",login);

export default router;

