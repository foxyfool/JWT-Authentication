// protected routes 
// one who has roles will go one who doesnt have routes will not go
// auth , isstudent , isadmin 

const jwt = require("jsonwebtoken");
require("dotenv").config();

// one to next middleware 
exports.auth = (req,res,next) =>{
    try{
        // extract jwt token - 3 ways header/body/cookie
        // body token parse 

        console.log("cookie",req.cookies.token);
        console.log("body",req.body.token) // least secure !

        // req.cookies.token || req.body.token uses body parser ||
        // couldnt auth via cookie 
        const token =  req.header("Authorization").replace("Bearer ","");


        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token Missing"
            })
        }

        // verify token 
        try{
            const payload = jwt.verify(token,process.env.JWT_SECRET);
            console.log(payload);

            req.user = payload; // payload stored
        }catch(error){
            return res.status(401).json({
                success:false,
                message:"Token Invalid"
            })
        }
        next();


    }catch(error){
        return res.status(401).json({
            success:false,
            message:"Something went wrong while verifying the token"
        })
    }
}

exports.isStudent = (req,res,next)=>{
    try{
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success:false,
                message:"This is a Protected Route For Student"
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"User role is not matching"
        })
    }
}

exports.isAdmin = (req,res,next)=>{
    try{
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"This is a Protected Route For Admin"
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"User role is not matching"
        })
    }
}