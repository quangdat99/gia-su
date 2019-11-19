var md5 = require('md5');
var Admin = require('../models/admin.model');
var db = require('../db');

module.exports.login = function(req, res){
	res.render('auth/login');
};

module.exports.postLogin = async function(req, res) {
	 var email = req.body.email;
	 var password = req.body.password;

	 var admin = await Admin.find({email: email});
	 console.log(typeof(password));
	 console.log(typeof(admin[0].password));
	 console.log(admin[0].password == password);
	 console.log(typeof(admin[0]._id));
	 if (!admin[0]) {
	 	res.render('auth/login', {
	 		errors: [
	 			'admin does not exist.'
	 		],
	 		values: req.body
	 	});
	 	return;
	 }

	 //var hashedPassword = md5(password);

	 if (admin[0].password !== password) {
	 	res.render('auth/login', {
	 		errors: [
	 			'Wrong password.'
	 		],
	 		values: req.body
	 	});
	 	return;
	 }

	 res.cookie('adminId', admin[0]._id);
	 res.redirect("/admin");
}