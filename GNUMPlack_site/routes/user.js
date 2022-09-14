const express = require('express');
const router = express.Router();

const {signin,processSignin,login} = require ('../controllers/userController');
const uploadFile = require('../middlewares/multerUsers')
const validationsSignin = require('../validations/registerValidations')

router.get('/signin',signin);
router.post('/signin',uploadFile.single('imageUser'), validationsSignin, processSignin);

router.get('/login',login);


module.exports = router;