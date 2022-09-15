const{check} = require('express-validator')

module.exports =[

     //email//
     check('email').trim()
     .notEmpty().withMessage('Debe ingresar su email').bail()
     .isEmail().withMessage('Debe ingresar un email valido'),


     //contraseña//
     check('pass').trim()
     .notEmpty().withMessage('Debe ingresar su contraseña').bail()
     .isLength({min:8}).withMessage('Debe contener al menos 8 caracteres'),

     
    
]