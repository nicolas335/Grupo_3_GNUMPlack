const express = require('express');
const router = express.Router();
let {create, edit, list, update, trash, store} = require('../controllers/adminController');

router.get('/list', list);
router.get('/create', create);
router.post('/create',store);

router.get('/edit/:id', edit);
router.put('/edit/:id',update)

router.delete('/:id',trash);

module.exports = router;