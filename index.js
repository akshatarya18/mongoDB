const express=require('express');
const dotenv=require("dotenv");
const connectDB = require('./db/db.config');
// const connectDB = require('../db/db.config');
const arya=express();
// arya.get('/',(req,res)=>{
//     res.send("hello server")
    
// });
// const port =3000
// arya.listen(port,()=>{
//     console.log("server is running on port 3000")
// });


dotenv.config(); //load environment variable from .env file

async function startServer(){
try{
 await connectDB()
 arya.listen(process.env.PORT,()=>{
    console.log("server is running on port 5000");
 })
}catch(err){
    console.error("error",err.message);
}
}
startServer();