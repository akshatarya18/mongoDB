

const express =require("express");
const { createCar, getCar, updateCar, deleteCar } = require("../controller/car.controller");
const router=express.Router();

router.post("/createcar", createCar)
router.get("/get-car",getCar);
router.put("/put-car/:id",updateCar);
router.delete("/delete-car/:id",deleteCar);



module.exports=router;