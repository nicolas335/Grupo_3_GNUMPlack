const express = require('express');
const router = express.Router();
const validationsRegister = require('../validations/registerValidations');
const uploadFile = require('../middlewares/multerRegister');


let {signin,login,processLogin,processRegister/*changes processSignin */,profile,logout} = require ('../controllers/userController');


const loginValidator = require('../validations/loginValidation');
/*deletes const upload = require('../middlewares/multerUsuarios'); */


router.get('/signin',signin);
router.post('/signin', uploadFile.single('imageUser'), validationsRegister ,processRegister);


router.get('/login',login);
router.post('/login',loginValidator,processLogin);


router.get('/profile',profile);
router.delete('/logout',logout);


module.exports = router;