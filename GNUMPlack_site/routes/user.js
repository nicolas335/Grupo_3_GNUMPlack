const express = require('express');
const router = express.Router();

let {signin,login,processLogin,processRegister,profile,logout} = require ('../controllers/userController');

const noLogin = require('../middlewares/noLogin')
const loginCheck = require('../middlewares/loginCkeck')
const validationsRegister = require('../validations/registerValidations');
const loginValidator = require('../validations/loginValidation');
const uploadFile = require('../middlewares/multerRegister');


router.get('/signin',loginCheck,signin);
router.post('/signin',loginCheck, uploadFile.single('imageUser'), validationsRegister ,processRegister);


router.get('/login',loginCheck,login);
router.post('/login',loginCheck,loginValidator,processLogin);


router.get('/profile',noLogin,profile);
router.delete('/logout',noLogin,logout);


module.exports = router;