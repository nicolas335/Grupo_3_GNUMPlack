const express = require('express');
const router = express.Router();

let {signin,login,processLogin,processRegister,profile,logout} = require ('../controllers/userController');

const validationsRegister = require('../validations/registerValidations');
const loginValidator = require('../validations/loginValidation');
const uploadFile = require('../middlewares/multerRegister');


router.get('/signin',signin);
router.post('/signin', uploadFile.single('imageUser'), validationsRegister ,processRegister);


router.get('/login',login);
router.post('/login',loginValidator,processLogin);


router.get('/profile',profile);
router.delete('/logout',logout);


module.exports = router;