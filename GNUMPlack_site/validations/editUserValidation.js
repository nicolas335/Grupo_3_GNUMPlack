const { body } = require('express-validator');
const db = require('../database/models')

module.exports = [
   body('first_name').notEmpty().trim().withMessage('Debe ingresar su nombre').bail()
    .isLength({min:3}).withMessage('Debe contener al menos 3 caracteres'),

    body('last_name').notEmpty().trim().withMessage('Debe ingresar su apellido').bail()
    .isLength({min:3}).withMessage('Debe contener al menos 3 caracteres'),

    body('email').trim().notEmpty().withMessage('Debe ingresar su email').bail()
    .isEmail().withMessage('Debe ingresar un formato de correo válido').bail()
    .custom(value => {
      return db.Users.findOne({
          where : {
              email : value
          }
      })
      .then(user => {
          if(user && user.email!==value){
              return Promise.reject('El email se encuentra registrado')
          }
      })
      
  }),
   
    body('phoneNumber').notEmpty().withMessage("Debe ingresar su número telefónico").bail()
    .isNumeric(),

    body('city').notEmpty().withMessage('Debe ingresar su ciudad'),
];