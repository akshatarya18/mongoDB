const Book = require("../models/book.model");





const createBook = async(req,res)=>{
    try{
        const{bookName,bookPrice,bookAuthor} =req.body;

        const newbook=await Book.create({bookName,bookPrice,bookAuthor})
        res.status(200).json({message:"book created ",newbook})
    }catch(err){
      res.status(500).json({message:err.message})
    }
};

const getBook = async (req,res) => {
  try{
   const book = await Book.find();
   res.status(200).json({message :"book fetched Successfully",book})   
  }catch(err){
    res.status(500).json({message: err.message})
  }    
}

const updateBook = async (req,res)=>{
  try{
    const{id} = req.params;
    const {bookName,bookPrice,bookAuthor} =req.body;
    const Book = await Book.findByIdAndUpdate(id,{bookName,bookAuthor,bookPrice});
    res.status(200).json({message :"book update Successfully",Book}) 
  }catch(err){
      res.status(500).json({message: err.message})
  }
}

const deleteBook= async(req,res)=>{
  try{
     const{id}= req.params;
    
    const delBook= await Laptop.findByIdAndDelete(id);
    res.status(200).json({message :"laptop delete Successfully",delBook}) 
  }catch(err){
     res.status(500).json({message: err.message});
  }
}

module.exports={  createBook , getBook,updateBook,deleteBook

};