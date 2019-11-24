var Phuhuynh = require('../models/phuhuynh.model');
var Giasu = require('../models/giasu.model');
var Classes = require('../models/class.model');

module.exports.postPhuhuynh = function (req, res, next) {
	var errors = [];

	if (!req.body.name) {
		errors.push('Yêu cầu nhập Tên ');
	}

	if (!req.body.phone) {
		errors.push('Yêu cầu nhập số Điên thoại ');
	}

	if (errors.length) {
		res.render('dang-ky-thue-gia-su', {
			errors: errors,
			values: req.body
		});
		return;
	}

	next();
};

module.exports.postGiasu = function (req, res, next) {
	var errors = [];

	if (!req.body.name) {
		errors.push('Yêu cầu nhập Tên ');
	}

	if (!req.body.email) {
		errors.push('Yêu cầu nhập Email ');
	}

	if (!req.body.phone) {
		errors.push('Yêu cầu nhập số Điên thoại ');
	}

	if (errors.length) {
		res.render('dang-ky-lam-gia-su', {
			errors: errors,
			values: req.body
		});
		return;
	}

	next();
};

module.exports.postCreate = async function (req, res, next) {
	var errors = [];

	if (!req.body.classId) {
		errors.push('Yêu cầu nhập Mã lớp  ');
	}

	if (!req.body.subject) {
		errors.push('Yêu cầu nhập Tên lớp  ');
	}

	if (!req.body.address) {
		errors.push('Yêu cầu nhập Địa chỉ  ');
	}

	if (!req.body.price) {
		errors.push('Yêu cầu nhập Giá tiền   ');
	}

	if (!req.body.require) {
		errors.push('Yêu cầu nhập Yêu cầu  ');
	}

	if (errors.length) {
		var classes = await Classes.find();
		res.render('classes/create', {
			errors: errors,
			values: req.body,
			classes: classes
		});
		return;
	}

	next();
};
