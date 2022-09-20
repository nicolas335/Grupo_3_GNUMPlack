const express = require('express');
const router = express.Router();
const validationsRegister = require('../validations/registerValidations');
const uploadFile = require('../middlewares/multerRegister');
let {signin,login,processRegister} = require ('../controllers/userController');


router.get('/signin',signin);
router.post('/signin', uploadFile.single('imageUser'), validationsRegister ,processRegister);
router.get('/login',login);


module.exports = router;