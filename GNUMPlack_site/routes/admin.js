const express = require('express');
const router = express.Router();
let {create, edit, list,update,trash} = require('../controllers/adminController');
const upload = require('../middlewares/multerProducts')

router.get('/list', list);
router.get('/create', create);

router.get('/edit/:id', edit);
router.put('/edit/:id',upload.single('Image'), update)

router.delete('/:id', trash);

module.exports = router;