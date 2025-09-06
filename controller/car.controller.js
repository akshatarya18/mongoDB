const Car = require("../models/car.model");



const createCar = async(req,res)=>{
    try{
        const{carName,carPrice,carBrand} =req.body;

        const car=await Car.create({carName,carPrice,carBrand})
        res.status(200).json({message:"car created ",car})
    }catch(err){
      res.status(500).json({message:err.message})
    }
};


const getCar = async (req,res) => {
  try{
   const car = await Car.find();
   res.status(200).json({message :"car fetched Successfully",car})   
  }catch(err){
    res.status(500).json({message: err.message})
  }    
}

const updateCar = async (req,res)=>{
  try{
    const{id} = req.params;
    const {carName,carBrand,carPrice} =req.body;
    const updateCar = await Car.findByIdAndUpdate(id,{carBrand,carName,carPrice});
    res.status(200).json({message :"car fetched Successfully",updateCar}) 
  }catch(err){
      res.status(500).json({message: err.message})
  }
}

const deleteCar= async(req,res)=>{
  try{
     const{id}= req.params;
    
    const deleteCar= await Car.findByIdAndDelete(id);
    res.status(200).json({message :"car fetched Successfully",deleteCar}) 
  }catch(err){
     res.status(500).json({message: err.message});
  }
}

module.exports={
    createCar,getCar,updateCar,deleteCar

};