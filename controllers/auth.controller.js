var md5 = require('md5');

var db = require('../db');

module.exports.login = function(req, res){
	res.render('auth/login');
};

module.exports.postLogin = function(req, res) {
	 var email = req.body.email;
	 var password = req.body.password;

	 var admin = db.get('admin').find({email: email}).value();

	 if (!admin) {
	 	res.render('auth/login', {
	 		errors: [
	 			'admin does not exist.'
	 		],
	 		values: req.body
	 	});
	 	return;
	 }

	 //var hashedPassword = md5(password);

	 if (admin.password !== password) {
	 	res.render('auth/login', {
	 		errors: [
	 			'Wrong password.'
	 		],
	 		values: req.body
	 	});
	 	return;
	 }

	 res.cookie('adminId', admin.id);
	 res.redirect('/admin');
}