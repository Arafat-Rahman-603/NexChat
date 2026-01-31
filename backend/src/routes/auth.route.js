import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
    res.send("signup route");
}); 

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
