var express = require('express');
var controller = require('../controllers/class.controller');

var db= require('../db');

var router = express.Router();

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.post('/create', controller.postCreate);


module.exports = router;