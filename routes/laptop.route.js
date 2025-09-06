

const express =require("express");
const { createLaptop, getLaptop, updateLaptop, deleteLaptop } = require("../controller/laptop.controller");
const router=express.Router();

router.post("/create-laptop", createLaptop);
router.get("/get-laptop",getLaptop);
router.put("/put-laptop",updateLaptop);
router.delete("/delete-laptop",deleteLaptop);



module.exports=router;