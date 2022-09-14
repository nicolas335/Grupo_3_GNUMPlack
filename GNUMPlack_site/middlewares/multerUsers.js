const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null,'./public/img/users')
    },
    filename:(req, file, cb)=>{
        let fileName = `img-${Date.now()}${path.extname(file.originalname)}`
        cb(null,fileName)
    }
});

const fileFilter = function(req, file,callback) {
    if(!file.originalname.match(/\.(jpg|jpeg|png|jfif|webp)$/)){
        req.fileValidationError = "Solo se permite imágenes";
        return callback(null,false,req.fileValidationError);
    }
    callback(null,true);
};

const uploadFile = multer({ storage, fileFilter });

module.exports = uploadFile;