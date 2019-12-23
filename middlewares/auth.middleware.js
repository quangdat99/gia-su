var Admin = require('../models/admin.model');
var Tutor = require('../models/tutor.model');


module.exports.requireAuth = async function (req, res, next) {
	if (!req.cookies.adminId) {
		res.redirect('/auth/login');
		return;
	}

	var admin = await Admin.find({_id: req.cookies.adminId });
	//console.log(admin[0]._id == req.cookies.adminId);
	if (!admin[0]._id) {
		res.redirect('/auth/login');
		return;
	}

	next();

};

module.exports.requireLogin = async function (req, res, next) {
	if (!req.cookies.tutorId) {
		res.redirect('/login');
		return;
	}

	var tutor = await Tutor.find({id: req.cookies.tutorId });

	if (!tutor[0].id) {
		res.redirect('/login');
		return;
	}

	next();

};