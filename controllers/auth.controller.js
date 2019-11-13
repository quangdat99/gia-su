var md5 = require('md5');

var db = require('../db');

module.exports.login = function(req, res){
	res.render('auth/login');
};

module.exports.postLogin = function(req, res) {
	 var email = req.body.email;
	 var password = req.body.password;

	 var addmin = db.get('addmin').find({email: email}).value();

	 if (!addmin) {
	 	res.render('auth/login', {
	 		errors: [
	 			'addmin does not exist.'
	 		],
	 		values: req.body
	 	});
	 	return;
	 }

	 //var hashedPassword = md5(password);

	 if (addmin.password !== password) {
	 	res.render('auth/login', {
	 		errors: [
	 			'Wrong password.'
	 		],
	 		values: req.body
	 	});
	 	return;
	 }

	 res.cookie('addminId', addmin.id);
	 res.redirect('/addmin');
}