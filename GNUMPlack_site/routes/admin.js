const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerProducts')
let {create, edit, list, update, trash, store,history,destroy,restore} = require('../controllers/adminController');
let productValidator = require('../validations/productValidation')

router.get('/list', list);

router.get('/create', create);
router.post('/create',productValidator,upload.single('image'),store);

router.get('/edit/:id', edit);
router.put('/edit/:id',productValidator,upload.single('image'),update)

router.delete('/:id', trash);

router.get('/listDeleted',history)
router.put('/restored/:id',restore)
router.delete('/destroy/:id',destroy)

module.exports = router;