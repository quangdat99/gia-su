var express = require('express');
var controller = require('../controllers/myAccount.controller');


var router = express.Router();

router.get('/', controller.index);

router.post('/profile', controller.update);


module.exports = router;