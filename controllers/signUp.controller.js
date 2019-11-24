var Giasu = require('../models/giasu.model');
var Phuhuynh = require('../models/phuhuynh.model');

module.exports.giasu = async function(req, res) {
	var giasu = await Giasu.find();
	res.render('signUp/giasu', {
		giasu: giasu
	});
};
module.exports.phuhuynh = async function(req, res) {
	var phuhuynh = await Phuhuynh.find();
	res.render('signUp/phuhuynh', {
		phuhuynh: phuhuynh
	});
};

module.exports.postPhuhuynh = function(req, res) {
	Phuhuynh.create(req.body);
	res.redirect('/danh-sach-lop-moi');
};

module.exports.postGiasu = function(req, res) {
	Giasu.create(req.body);	
	res.redirect('/danh-sach-lop-moi');
};