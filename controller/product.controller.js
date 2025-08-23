const Product = require("../models/product.model");



const createProduct = async(req,res)=>{
    try{
        const{productName,productPrice} =req.body;

        const product=await Product.create({productName,productPrice})
        res.status(200).json({message:"product created successfully",product})
    }catch(err){
      res.status(500).json({message:err.message})
    }
}

module.exports={
    createProduct
};