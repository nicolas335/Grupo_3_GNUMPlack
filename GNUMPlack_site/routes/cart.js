const express = require("express");
const router = express.Router();
const {cart} = require("../controllers/cartController");

router.get("/", cart);

module.exports = router;