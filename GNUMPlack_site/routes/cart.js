
const express = require("express");
const router = express.Router();
const {cart} = require("../controllers/cartController");

const noLogin = require('../middlewares/noLogin')

router.get("/",noLogin, cart);

module.exports = router;