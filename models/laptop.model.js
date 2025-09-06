

const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema({
    laptopName:{
        type:String,
        required:true
    },
    laptopPrice:{
        type:Number,
        required:true
    },
    laptopBrand:{
        type:String,
        required:true
    }

})

const Laptop = mongoose.model("Laptop",laptopSchema)
module.exports= Laptop;