import express from "express";
import { createJob } from "../controllers/jobController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import recruiterOnly from "../middleware/recruiterOnly.js";

const router = express.Router();

router.post("/create", authMiddleware, recruiterOnly, createJob);

export default router;
