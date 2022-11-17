//const { compareSync } = require('bcryptjs')//
const{check,body} = require('express-validator')
const usuarios = require('../data/Users.json')
const bcryptjs = require('bcryptjs')
const db = require('../database/models')

module.exports =[

     //email//
     check('email').trim()
     .notEmpty().withMessage('Debe ingresar su email').bail()
     .isEmail().withMessage('Debe ingresar un email valido'),


     //contraseña//
     check('pass').trim()
     .notEmpty().withMessage('Debe ingresar su contraseña')
     .isLength({min:8}).withMessage('La contraseña debe tener un mínimo de 8 caracteres'),
     
     body('pass')
     .custom((value, {req}) => {
     return db.Users.findOne({
          where: {
               email: req.body.email
          }
        })
        .then(user => {
          if(!bcryptjs.compareSync(value, user.dataValues.password)){
          return Promise.reject()
          }
       })
       .catch(() => {
          return Promise.reject("Email o contraseña incorrecta")
       })
    })
    
]