const express = require('express');
const router = express.Router();
let {create, edit, list} = require('../controllers/adminController');

router.get('/create', create);
router.get('/list', list);
router.get('/edit', edit);

module.exports = router;