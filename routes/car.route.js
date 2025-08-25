

const express =require("express");
const { createCar, getCar } = require("../controller/car.controller");
const router=express.Router();

router.post("/createcar", createCar)
router.get("/get-car",getCar);



module.exports=router;