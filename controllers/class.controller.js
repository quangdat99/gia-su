var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(req, res){
	res.render('classes/index', {
		classes: db.get('classes').value()
	});
};


module.exports.create = function(req, res) {
	res.render('classes/create', {
		classes: db.get('classes').value()
	});
};

module.exports.postCreate = function(req, res) {
	req.body.id = shortid.generate();

	db.get('classes').push(req.body).write();
	res.redirect('/classes/create');
};
