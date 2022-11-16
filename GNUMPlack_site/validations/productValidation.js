const {check, body} = require('express-validator')
const path = require('path')

module.exports = [
    check('name').trim()
    .notEmpty().withMessage('Debe ingresar el nombre')
    .isLength({min:5}).withMessage('Debe contener al menos 8 caracteres')
    .isLength({max:100}).withMessage('Debe contener como máximo 100 caracteres'),

    check('qualities').trim()
    .notEmpty().withMessage('Debe ingresar las cualidades')
    .isLength({min:10}).withMessage('Debe contener al menos 10 caracteres')
    .isLength({max:600}).withMessage('Debe contener como máximo 600 caracteres'),

    check('advantage').trim()
    .notEmpty().withMessage('Debe ingresar las ventajas')
    .isLength({min:10}).withMessage('Debe contener al menos 10 caracteres')
    .isLength({max:600}).withMessage('Debe contener como máximo 600 caracteres'),

    check('dimensions').trim()
    .notEmpty().withMessage('Debe ingresar las dimensiones')
    .isLength({min:5}).withMessage('Debe contener al menos 5 caracteres')
    .isLength({max:45}).withMessage('Debe contener como máximo 45 caracteres'),

    check('description').trim()
    .notEmpty().withMessage('Debe ingresar la descripción')
    .isLength({min:10}).withMessage('Debe contener al menos 10 caracteres')
    .isLength({max:600}).withMessage('Debe contener como máximo 600 caracteres'),

    check('category').notEmpty().withMessage('Debe ingresar la categoria'),

    check('condition').notEmpty().withMessage('Debe ingresar la condición'),

    check('price').trim()
    .notEmpty().withMessage('Debe ingresar el precio').bail()
    .isNumeric().withMessage('Debe ingresar datos numéricos')
    .isInt({min:0}).withMessage('El precio no puede ser menor a 0')
    .isLength({min:3}).withMessage('Debe contener al menos 3 caracteres')
    .isLength({max:9}).withMessage('Debe contener como máximo 9 caracteres'),

    check('stock').trim()
    .notEmpty().withMessage('Debe ingresar el stock').bail()
    .isNumeric().withMessage('Debe ingresar datos numéricos')
    .isInt({min:0}).withMessage('El stock no puede ser menor a 0')
    .isLength({max:9}).withMessage('Debe contener como máximo 9 caracteres'),

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