var db = require('../db');

module.exports.index = function(req, res){
	res.render('classes/index', {
		classes: db.get('classes').value()
	});
};

module.exports.search = function(req, res) {
	var q=req.query.q;
	var matchedClass = db.get('classes').value().filter( function(_class) {
		return _class.subject.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});

	res.render('classes/index', {
		classes: matchedClass
	});
};

module.exports.create = function(req, res) {
	res.render('classes/create', {
		classes: db.get('classes').value()
	});
};

module.exports.postCreate = function(req, res) {
	db.get('classes').push(req.body).write();
	res.redirect('/classes/create');
};
