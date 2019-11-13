var db = require('../db');

module.exports.requireAuth = function (req, res, next) {
	if (!req.cookies.addminId) {
		res.redirect('/auth/login');
		return;
	}

	var addmin = db.get('addmin')
				 .find({id: req.cookies.addminId })
				 .value();

	if (!addmin) {
		res.redirect('/auth/login');
		return;
	}

	next();

};