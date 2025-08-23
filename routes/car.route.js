

const express =require("express");
const { createCar } = require("../controller/car.controller");
const router=express.Router();

router.post("/createcar", createCar)


module.exports=router;