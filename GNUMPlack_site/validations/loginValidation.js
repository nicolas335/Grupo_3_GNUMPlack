const{check,body} = require('express-validator')
const usuarios = require('../data/Users.json')

module.exports =[

     //email//
     check('email').trim()
     .notEmpty().withMessage('Debe ingresar su email').bail()
     .isEmail().withMessage('Debe ingresar un email valido'),


     //contraseña//
     check('pass').trim()
     .notEmpty().withMessage('Debe ingresar su contraseña'),
     

     body('email')
     .custom((value,{req}) =>{
          let usuario = usuarios.find(usuario => usuario.email === value && req.body.pass === usuario.password)
          if (usuario) {
               return true
          } else {
               return false   
          }
     }).withMessage('El email o la contraseña no coinciden')
    
]