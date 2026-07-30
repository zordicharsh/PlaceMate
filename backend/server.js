import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});





app.listen(5000, () => {
  console.log("Server running on port 5000");
});