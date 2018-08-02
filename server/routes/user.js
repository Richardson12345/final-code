var express = require("express");
var router = express.Router();
var Controller = require("../controller/userController")

router.post("/signup", Controller.createUser);
router.post('/signin', Controller.signIn);

module.exports = router