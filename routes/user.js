const express = require("express");
const router = express.Router();


const{login,signup} = require("../controller/Auth");
const {auth,isStudent,isAdmin} = require("../miidlewares/auth")

router.post("/login",login);
router.post("/signup",signup);

// protected Route - get this from token -> role created!

router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to TEST Route",
    })
});
router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to protected route for students",
    })
});

router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to protected route for Admin",
    })
});

module.exports = router;
