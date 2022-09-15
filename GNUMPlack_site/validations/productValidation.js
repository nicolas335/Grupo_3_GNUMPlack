const {check} = require('express-validator')

module.exports = [
    check('name').trim()
    .notEmpty().withMessage('Debe ingresar el nombre'),

    check('qualities').trim()
    .notEmpty().withMessage('Debe ingresar las qualities'),

    check('dimensions').trim()
    .notEmpty().withMessage('Debe ingresar las dimensions'),

    check('description').trim()
    .notEmpty().withMessage('Debe ingresar la description'),

    check('category').notEmpty().withMessage('Debe ingresar la category'),

    check('condition').notEmpty().withMessage('Debe ingresar la condition'),

    check('price').trim()
    .notEmpty().withMessage('Debe ingresar el price').bail()
    .isNumeric().withMessage('Debe ingresar datos numéricos'),

    check('discount').trim()
    .notEmpty().withMessage('Debe ingresar el discount').bail()
    .isNumeric().withMessage('Debe ingresar datos numéricos')
]