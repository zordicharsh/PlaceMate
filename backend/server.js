import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import recruiterRoutes from "./routes/recruiterRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/recruiter", recruiterRoutes);
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});





app.listen(5000, () => {
  console.log("Server running on port 5000");
});