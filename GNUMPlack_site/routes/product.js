const express = require('express');
const router = express.Router();
const {product,detail,search} = require('../controllers/productController');

router.get('/', product);
router.get('/detail/:id', detail);
router.get('/search', search);




module.exports = router;