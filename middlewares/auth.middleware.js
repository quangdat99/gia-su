var Admin = require('../models/admin.model');

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