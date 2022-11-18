const express = require('express');
const router = express.Router();

let {create, edit, list, update, trash, store,history,destroy,restore} = require('../controllers/adminController');

const adminCheck = require('../middlewares/adminCheck')
const upload = require('../middlewares/multerProducts')
const productValidator = require('../validations/productValidation')
const notFound = require('../middlewares/notFound')


router.get('/list'/* ,adminCheck */, list);

router.get('/create'/* ,adminCheck */, create);
router.post('/create'/* ,adminCheck */,upload.single('image'),productValidator,store);

router.get('/edit/:id'/* ,adminCheck */,notFound, edit);
router.put('/edit/:id'/* ,adminCheck */,notFound,upload.single('image'),productValidator,update)

router.delete('/:id'/* ,adminCheck */,notFound, trash);

router.get('/listDeleted'/* ,adminCheck */,history)
router.put('/restored/:id'/* ,adminCheck */,notFound,restore)
router.delete('/destroy/:id'/* ,adminCheck */,notFound,destroy)

module.exports = router;