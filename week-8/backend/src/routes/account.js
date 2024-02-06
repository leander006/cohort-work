const express = require("express");

const router = express.Router();

const { AccountController } = require("../controllers/index");
const { authMiddleware } = require("../config/authenticate");

router.get("/balance", authMiddleware, AccountController.get);
router.post("/transfer", authMiddleware, AccountController.transfer);

module.exports = router;
