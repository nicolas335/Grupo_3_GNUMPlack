const express = require('express');
const router = express.Router();
let {create, edit} = require('../controllers/adminController');

router.get('/create', create);
router.get('/edit', edit);

module.exports = router;