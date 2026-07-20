import express from "express";
import userRoutes from "./routes/userRoutes.js"
import cors from "cors";
const app = express();



app.use(express.json());
app.use(cors());
app.use("/api/users",userRoutes);




const port = 5000;

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
});

