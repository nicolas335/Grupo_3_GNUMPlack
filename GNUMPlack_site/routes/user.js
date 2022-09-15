const express = require('express');
const router = express.Router();

let {signin,login,processLogin} = require ('../controllers/userController');


const loginValidator = require('../validations/loginValidation')

router.get('/signin',signin);


router.get('/login',login);
router.post('/login',loginValidator,processLogin);


module.exports = router;