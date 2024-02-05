const express = require("express");

const router = express.Router();

const { AuthController } = require("../controllers/index");

router.post("/signup", AuthController.signup);
router.post("/singin", AuthController.signin);

module.exports = router;
