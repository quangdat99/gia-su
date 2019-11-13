var db = require('../db');

module.exports.giasu = function(req, res) {
	res.render('signUp/giasu', {
		giasu: db.get('giasu').value()
	});
};
module.exports.phuhuynh = function(req, res) {
	res.render('signUp/phuhuynh', {
		phuhuynh: db.get('phuhuynh').value()
	});
};

module.exports.postPhuhuynh = function(req, res) {
	db.get('phuhuynh').push(req.body).write();
	//res.window.alert("Đăng ký thành công");
	res.redirect('/signup/phuhuynh');
};

module.exports.postGiasu = function(req, res) {
	db.get('giasu').push(req.body).write();
	//res.window.alert("Đăng ký thành công");
	res.redirect('/signup/giasu');
};