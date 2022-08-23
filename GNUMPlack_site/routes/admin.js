const express = require('express');
const router = express.Router();
let {create, edit, list,update,trash} = require('../controllers/adminController');

router.get('/list', list);
router.get('/create', create);

router.get('/edit/:id', edit);
router.put('/edit/:id',update)

router.delete('/:id',trash);

module.exports = router;