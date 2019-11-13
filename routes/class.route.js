var express = require('express');
var controller = require('../controllers/class.controller');
var authMiddleware = require('../middlewares/auth.middleware');
var validate = require('../validate/signUp.validate');

var db= require('../db');

var router = express.Router();

router.get('/', controller.index);

router.get('/create',authMiddleware.requireAuth, controller.create);

router.post('/create',validate.postCreate, controller.postCreate);


module.exports = router;