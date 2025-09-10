
const jwt=require("jsonwebtoken");

const authMiddleware = (req,res,next)=>{
    try{
        const authHeader = req.header("authorization");
        if(!authHeader){
            return res
            .status(401)
            .json({message :"unauthorized: No auth provided"});
        } 
        console.log("Auth Header:", authHeader);
        const token = authHeader.split(" ")[1];
        if(!token){
            return res.status(401).json({message: "Unauthorized : no token provided"});
        }
        console.log("Token:", token);
        const verification = jwt.verify(token,process.env.JWT_SECRET);
        console.log("verified Token:", verification);
        req.user = verification;
        next();
    }  catch(err){
        res.status(500).json({message: err.message});
    }
} 
module.exports = authMiddleware;