
var Admin = require('../models/admin.model');

var Tutor = require('../models/tutor.model');


module.exports.login = function(req, res){
	res.render('auth/login');
};

module.exports.postLogin = async function(req, res) {
	 var email = req.body.email;
	 var password = req.body.password;

	 var admin = await Admin.find({email: email});
	 
	 if (!admin[0]) {
	 	res.render('auth/login', {
	 		errors: [
	 			'Admin không tồn tại .'
	 		],
	 		values: req.body
	 	});
	 	return;
	 }

	 //var hashedPassword = md5(password);

	 if (admin[0].password !== password) {
	 	res.render('auth/login', {
	 		errors: [
	 			'Sai password.'
	 		],
	 		values: req.body
	 	});
	 	return;
	 }

	 res.cookie('adminId', admin[0]._id);
	 res.redirect("/admin");
}


module.exports.loginTutor = function(req, res){
	res.render('login');
};

module.exports.postLoginTutor = async function(req, res) {
	 var email = req.body.email;
	 var password = req.body.password;

	 var tutor = await Tutor.find({email: email});
	 
	 if (!tutor[0]) {
	 	res.render('login', {
	 		errors: [
	 			'Email không tồn tại .'
	 		],
	 		values: req.body
	 	});
	 	return;
	 }

	 //var hashedPassword = md5(password);

	 if (tutor[0].password !== password) {
	 	res.render('login', {
	 		errors: [
	 			'Sai password.'
	 		],
	 		values: req.body
	 	});
	 	return;
	 }
	 // console.log(tutor);
	 // res.render('myaccount/index',{
	 // 	tutor: tutor
	 // });
	 res.cookie('tutorId', tutor[0].id);
	 // res.render('myaccount/index',{
	 // 	tutor: tutor
	 // })
	 res.redirect("/myaccount");

}