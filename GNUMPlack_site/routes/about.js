const express = require("express");
const router = express.Router();

const {about} = require("../controllers/aboutController");

router.get("/", about);

module.exports = router;