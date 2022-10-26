const express = require('express');
const router = express.Router();

let {signin,login,processLogin,processRegister,profile,logout,  editUser, processEdit} = require ('../controllers/userController');

const noLogin = require('../middlewares/noLogin')
const loginCheck = require('../middlewares/loginCkeck')
const validationsRegister = require('../validations/registerValidations');
const loginValidator = require('../validations/loginValidation');
const uploadFile = require('../middlewares/multerRegister');
const editUserValidation =require('../validations/editUserValidation');


router.get('/signin',loginCheck,signin);
router.post('/signin',loginCheck, uploadFile.single('imageUser'), validationsRegister ,processRegister);


router.get('/login',loginCheck,login);
router.post('/login',loginCheck,loginValidator,processLogin);




router.get('/profile',noLogin,profile);
router.delete('/logout',noLogin,logout);

router.get('/editUser', editUser);
router.put('/editUser', uploadFile.single('imageUser'),editUserValidation,processEdit);

module.exports = router;