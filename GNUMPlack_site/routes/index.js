const express = require('express');
const router = express.Router();
const {home,cart} = require('../controllers/indexController');

router.get('/', home);


module.exports = router;