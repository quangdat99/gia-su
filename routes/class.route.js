var express = require('express');
var controller = require('../controllers/class.controller');
var authMiddleware = require('../middlewares/auth.middleware');
var validate = require('../validate/signUp.validate');



var router = express.Router();

// router.get('/', controller.index);

router.get('/create',authMiddleware.requireAuth, controller.create);

router.get('/search', controller.search);

router.get('/:id', controller.view);

router.post('/create',validate.postCreate, controller.postCreate);


module.exports = router;