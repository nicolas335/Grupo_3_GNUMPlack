const {check} = require('express-validator')

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
    .isNumeric().withMessage('Debe ingresar datos numéricos'),

    check('stock').trim()
    .notEmpty().withMessage('Debe ingresar el stock').bail()
    .isNumeric().withMessage('Debe ingresar datos numéricos'),

    check('discount').trim()
    .notEmpty().withMessage('Debe ingresar el descuento').bail()
    .isNumeric().withMessage('Debe ingresar datos numéricos')
]