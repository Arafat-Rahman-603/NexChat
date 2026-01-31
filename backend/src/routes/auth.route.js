import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.get("/login",(req,res)=>{
    res.end("Login route")
})

router.get("/logout",(req,res) => {
    res.end("logout route")
})

router.get("/update",(req,res) => {
    res.end("update route")
})

export default router;
