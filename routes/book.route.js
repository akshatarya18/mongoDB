

const express =require("express");
const { createBook, getBook, updateBook,deleteBook } = require("../controller/book.controller");
const router=express.Router();

router.post("/create-book", createBook)
router.get("/get-book",getBook);
router.put("/put-book/:id",updateBook);
router.delete("/delete-book/:id",deleteBook);



module.exports=router;