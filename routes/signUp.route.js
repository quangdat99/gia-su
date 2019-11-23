var express = require('express');
var controller = require('../controllers/signUp.controller');
var validate = require('../validate/signUp.validate');


var router = express.Router();

router.get('/giasu', controller.giasu);

router.get('/phuhuynh', controller.phuhuynh);

router.post('/phuhuynh',validate.postPhuhuynh, controller.postPhuhuynh);

router.post('/giasu',validate.postGiasu, controller.postGiasu);




module.exports = router;
