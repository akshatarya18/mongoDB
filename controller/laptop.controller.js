


const Laptop= require("../models/laptop.model")

const createLaptop = async(req,res)=>{
    try{
        const{laptopName,laptopPrice,laptopBrand} =req.body;

        const laptop=await Laptop.create({laptopName,laptopPrice,laptopBrand})
        res.status(200).json({message:"laptop created ",laptop})
    }catch(err){
      res.status(500).json({message:err.message})
    }
};

const getLaptop = async (req,res) => {
  try{
   const arya = await Laptop.find();
   res.status(200).json({message :"laptop fetched Successfully",arya})   
  }catch(err){
    res.status(500).json({message: err.message})
  }    
}

const updateLaptop = async (req,res)=>{
  try{
    const{id} = req.query;
    const {laptopName,laptopBrand,laptopPrice} =req.body;
    const arya = await Laptop.findByIdAndUpdate(id,{laptopBrand,laptopName,laptopPrice});
    res.status(200).json({message :"laptop update Successfully",arya}) 
  }catch(err){
      res.status(500).json({message: err.message})
  }
}

const deleteLaptop= async(req,res)=>{
  try{
     const{id}= req.query;
    
    const akshat= await Laptop.findByIdAndDelete(id);
    res.status(200).json({message :"laptop delete Successfully",akshat}) 
  }catch(err){
     res.status(500).json({message: err.message});
  }
}

module.exports={  createLaptop,getLaptop,updateLaptop,deleteLaptop

};