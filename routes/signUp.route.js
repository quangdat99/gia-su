var express = require('express');
var controller = require('../controllers/signUp.controller');
var validate = require('../validate/signUp.validate');


var router = express.Router();

router.get('/phuhuynh', controller.phuhuynh);

router.get('/tutor', controller.tutor);

router.get('/chitiet/:id', controller.chitiet);

router.post('/phuhuynh',validate.postPhuhuynh, controller.postPhuhuynh);

router.post('/tutor',validate.postTutor, controller.postTutor);


module.exports = router;
