const express = require('express');
const router = express.Router();
let {create, edit, list} = require('../controllers/adminController');

router.get('/create', create);
router.get('/edit', edit);
router.get('/list', list);

module.exports = router;