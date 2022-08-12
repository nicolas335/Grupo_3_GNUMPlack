const express = require('express');
const router = express.Router();
const {product,detail} = require('../controllers/productController');

router.get('/', product);
router.get('/detail', detail);



module.exports = router;