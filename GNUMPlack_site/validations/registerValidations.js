const { body } = require('express-validator');
const users = require('../data/Users.json');
module.exports = [
    body('name').notEmpty().trim().withMessage('Debe ingresar su nombre').bail()
    .isLength({min:3}).withMessage('Debe contener al menos 3 caracteres'),

    body('lastName').notEmpty().trim().withMessage('Debe ingresar su apellido').bail()
    .isLength({min:3}).withMessage('Debe contener al menos 3 caracteres'),

    body('email').trim().notEmpty().withMessage('Debe ingresar su email').bail()
    .isEmail().withMessage('Debe ingresar un formato de correo válido').bail()
    .custom((value, { req }) => {
      let user = users.find((user) => user.email === value.trim());
      return !!!user;
    })
    .withMessage("El email ya se encuentra registrado"),

    body('pass')
    .isLength({min:8}).withMessage('La contraseña debe contener al menos 8 caracteres'),
    body('pass2')
    .isLength({min:8}).withMessage('La contraseña debe contener al menos 8 caracteres').bail(),

    body('pass2')
    .custom((value,{req}) => value !== req.body.pass ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    body('phoneNumber').notEmpty().withMessage("Debe ingresar su número telefónico").bail()
    .isNumeric(),

    body('city').notEmpty().withMessage('Debe ingresar su ciudad'),

    body('terminos').notEmpty().withMessage('Debe Aceptar nuestros términos y condiciones'),

];