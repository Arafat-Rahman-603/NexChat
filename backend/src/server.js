import express from "express";
import dotenv from "dotenv";
import cors from "cors";



import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import connectDB from "./lib/db.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

const PORT = process.env.PORT;
const frontendUrl = process.env.FRONTEND_URL;

app.use(express.json());
app.use(cors({
    origin: frontendUrl,
    credentials: true
    }));
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages", messageRoutes);
   

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    connectDB();
});
