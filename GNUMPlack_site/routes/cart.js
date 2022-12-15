const express = require("express");
const router = express.Router();
const {cart, add, destroy, buy} = require("../controllers/cartController");

const noLogin = require('../middlewares/noLogin')

router.get("/",noLogin, cart);
router.post("/agregar/:id",noLogin, add);
router.delete("/quitar/:id",noLogin, destroy)
router.put("/comprar",noLogin, buy)

module.exports = router;