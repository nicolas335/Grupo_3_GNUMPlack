const express = require('express');
const router = express.Router();

let {signin,login,processLogin,processSignin,profile,logout} = require ('../controllers/userController');


const loginValidator = require('../validations/loginValidation')
const upload = require('../middlewares/multerUsuarios')

router.get('/signin',signin);


router.get('/login',login);
router.post('/login',loginValidator,processLogin);

router.get('/profile',profile);
router.delete('/logout',logout);

module.exports = router;