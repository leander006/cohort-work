const express = require("express");

const router = express.Router();

const authcontroller = require("./authcontroller");
const userController = require("./userController");

router.use("/", authcontroller);
router.use("/", userController);

module.exports = router;
