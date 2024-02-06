const express = require("express");

const router = express.Router();

const { authMiddleware } = require("../config/authenticate");
const { update, get } = require("../controllers/userController");

router.put("/", authMiddleware, update);
router.get("/bulk", authMiddleware, get);

module.exports = router;
