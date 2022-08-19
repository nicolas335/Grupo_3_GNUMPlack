const express = require('express');
const router = express.Router();

let {signin,login} = require ('../controllers/userController');

router.get('/signin',signin);
router.get('/login',login);


module.exports = router;