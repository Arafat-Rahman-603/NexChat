import jwt from "jsonwebtoken";
import User from "../models/User.model.js";
import dotenv from "dotenv";
dotenv.config();

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) res.status(401).json({ message: "Invalid token!" });

    const user = await User.findById(decode.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    req.user = user;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error auth middleware" });
  }
};
