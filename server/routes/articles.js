var express = require("express");
var router = express.Router();
var tokenMiddleware = require('../middleware/tokenMidlleware')
var Controller = require("../controller/articleController")


router.post('/' ,tokenMiddleware.verifyToken, Controller.create )
router.get('/', Controller.get);
router.get('/one/:id', Controller.getOne);
router.post('/author', Controller.getAuthor);
router.post('/category', Controller.getCategory);
router.put('/:id',tokenMiddleware.verifyToken,  Controller.updateOne);
router.delete('/:id',tokenMiddleware.verifyToken, Controller.delete)





module.exports = router