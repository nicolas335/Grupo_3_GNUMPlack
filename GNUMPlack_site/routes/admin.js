const express = require('express');
const router = express.Router();
let {createAndEdit} = require('../controllers/adminController');

router.get('/createAndEdit', createAndEdit);

module.exports = router;