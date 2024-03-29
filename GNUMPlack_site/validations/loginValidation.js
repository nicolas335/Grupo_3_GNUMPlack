//const { compareSync } = require('bcryptjs')//
const{check,body} = require('express-validator')
const usuarios = require('../data/Users.json')
const bcryptjs = require('bcryptjs')

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
          let usuario = usuarios.find(user => user.email === value &&  bcryptjs.compareSync(req.body.pass,user.pass)) 
          //let usuario = usuarios.find(usuario => usuario.email === value && compareSync(req.body.pass,usuario.pass))//
          if (usuario) {
               return true
          } else {
               return false   
          }
     }).withMessage('El email o la contraseña no coinciden')
    
]