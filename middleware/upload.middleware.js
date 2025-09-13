

const { error } = require('console');
const multer = require('multer');
const path= require('path');

const storage = multer.diskStorage({
   destination: (req,file,cb)=>{
    cb(null, "uploads/");
   }, //handling destination of file
   filename:(req,file,cb)=>{
    cb(null,Date.now()+path.extname(file.originalname));
   }, //handling file name by givimg a unique name
});

const filefilter = (req,file,cb)=>{
    if(file.mimetype==="image/jpg" || 
        file.mimetype==="image/png" ||
        file.mimetype==="image.jpeg") {
            cb(null,true);
        } else{
            cb(new Error("only .jpeg, .jpg, .pngformat allowed!"), false);
        }
};

const upload = multer({
    storage,
    filefilter,
    limits: {fileSize: 1024 * 1024 *5 },
});

module.exports =upload;