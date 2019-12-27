var Admin = require('../models/admin.model');
var Tutor = require('../models/tutor.model');


module.exports.requireAuth = async function (req, res, next) {
	if (!req.signedCookies.adminId) {
		res.redirect('/auth/login');
		return;
	}

	var admin = await Admin.findOne({_id: req.signedCookies.adminId });
	if (!admin._id) {
		res.redirect('/auth/login');
		return;
	}

	next();

};

module.exports.requireLogin = async function (req, res, next) {
	if (!req.signedCookies.tutorId) {
		res.redirect('/login');
		return;
	}

	var tutor = await Tutor.findOne({id: req.signedCookies.tutorId });

	if (!tutor.id) {
		res.redirect('/login');
		return;
	}
	console.log(req.signedCookies.tutorId)
	res.locals.user = tutor;
	next();

};

// module.exports.req = async function (req, res, next) {
// 	if (req.signedCookies.tutorId) {
// 		res.render('layouts/common',
// 			user: req.signedCookies.tutorId
// 		);
// 	}

	
// 	next();

// };