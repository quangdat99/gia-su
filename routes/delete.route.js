var express = require('express');

var controller = require('../controllers/delete.controller');

var router = express.Router();

router.get('/class/:id', controller.delClass);

router.get('/giasu/:id', controller.delGiasu);

router.get('/phuhuynh/:id', controller.delPhuhuynh);



module.exports = router;