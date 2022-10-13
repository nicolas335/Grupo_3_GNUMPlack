const express = require('express');
const router = express.Router();

let {create, edit, list, update, trash, store,history,destroy,restore} = require('../controllers/adminController');

const adminCheck = require('../middlewares/adminCheck')
const upload = require('../middlewares/multerProducts')
const productValidator = require('../validations/productValidation')

router.get('/list',adminCheck, list);

router.get('/create',adminCheck, create);
router.post('/create',adminCheck,upload.single('image'),productValidator,store);

router.get('/edit/:id',adminCheck, edit);
router.put('/edit/:id',adminCheck,upload.single('image'),productValidator,update)

router.delete('/:id',adminCheck, trash);

router.get('/listDeleted',adminCheck,history)
router.put('/restored/:id',adminCheck,restore)
router.delete('/destroy/:id',adminCheck,destroy)

module.exports = router;