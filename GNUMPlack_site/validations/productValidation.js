const {check, body} = require('express-validator')
const path = require('path')

module.exports = [
    check('name').trim()
    .notEmpty().withMessage('Debe ingresar el nombre'),

    check('qualities').trim()
    .notEmpty().withMessage('Debe ingresar las cualidades'),

    check('advantage').trim()
    .notEmpty().withMessage('Debe ingresar las ventajas'),

    check('dimensions').trim()
    .notEmpty().withMessage('Debe ingresar las dimensiones'),

    check('description').trim()
    .notEmpty().withMessage('Debe ingresar la descripción'),

    check('category').notEmpty().withMessage('Debe ingresar la categoria'),

    check('condition').notEmpty().withMessage('Debe ingresar la condición'),

    check('price').trim()
    .notEmpty().withMessage('Debe ingresar el precio').bail()
    .isNumeric().withMessage('Debe ingresar datos numéricos')
    .isInt({min:0}).withMessage('El precio no puede ser menor a 0'),

    check('stock').trim()
    .notEmpty().withMessage('Debe ingresar el stock').bail()
    .isNumeric().withMessage('Debe ingresar datos numéricos')
    .isInt({min:0}).withMessage('El stock no puede ser menor a 0'),

    check('discount').trim()
    .notEmpty().withMessage('Debe ingresar el descuento').bail()
    .isNumeric().withMessage('Debe ingresar datos numéricos')
    .isInt({min:0,max:100}).withMessage('El descuento debe ser entre 0 y 100'),

/*     check('image').notEmpty().withMessage('Debe adjuntar una imagen del producto') */
    /* body('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg",".jpeg",".png",".jfif",".webp"];
    
       if (!file){
        throw new Error('Tienes que subir una imagen');
       }else {
        let fileExtension = path.extname(file.originalname);
    
       if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(`Las extensiones permitidas son ${acceptedExtensions.join(', ')}`);    
       }}
    
       return true
    }) */
]