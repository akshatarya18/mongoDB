const Car = require("../models/car.model");



const createCar = async(req,res)=>{
    try{
        const{carName,carPrice,carBrand} =req.body;

        const car=await Car.create({carName,carPrice,carBrand})
        res.status(200).json({message:"car created ",car})
    }catch(err){
      res.status(500).json({message:err.message})
    }
}

module.exports={
    createCar
};