var express = require('express');

var controller = require('../controllers/delete.controller');

var router = express.Router();

router.get('/class', controller.delClass);

router.get('/giasu', controller.delGiasu);

router.get('/phuhuynh', controller.delPhuhuynh);



module.exports = router;