const mongoose = require("mongoose")

const connectDB = async ()=>{
    try{
        console.log("checking...",process.env.MONGO_URI);
await mongoose.connect(process.env.MONGO_URI)
 console.log("mongoDB connected sucessfully");
    } catch (err){
    console.error("error connecting to mongoDB:",err.message);
    }
};

module.exports = connectDB;   //exporting the connectDb function