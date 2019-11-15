var db = require('../db');

module.exports.requireAuth = function (req, res, next) {
	if (!req.cookies.adminId) {
		res.redirect('/auth/login');
		return;
	}

	var admin = db.get('admin')
				 .find({id: req.cookies.adminId })
				 .value();

	if (!admin) {
		res.redirect('/auth/login');
		return;
	}

	next();

};