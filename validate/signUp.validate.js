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

module.exports.postTutor = function (req, res, next) {
	var errors = [];

	if (!req.body.name) {
		errors.push('Yêu cầu nhập Tên ');
	}

	if (!req.body.email) {
		errors.push('Yêu cầu nhập Email ');
	}

	if (!req.body.password) {
		errors.push('Yêu cầu nhập mật khẩu  ');
	}

	if (errors.length) {
		res.render('register', {
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
	if (!req.body.sex) {
		errors.push('Yêu cầu nhập Giới tính   ');
	}

	if (!req.body.info) {
		errors.push('Yêu cầu nhập Thông tinh  ');
	}

	if (!req.body.time) {
		errors.push('Yêu cầu nhập Thời gian học ');
	}

	if (!req.body.income) {
		errors.push('Yêu cầu nhập Thu nhập  ');
	}

	if (!req.body.cost) {
		errors.push('Yêu cầu nhập Chi phí  ');
	}

	if (!req.body.additional) {
		errors.push('Yêu cầu nhập Bổ sung  ');
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



// module.exports.search = async function (req, res, next) {
// 	var errors = [];

// 	if (!req.body.q) {
// 		errors.push('Yêu cầu nhập ');
// 	}

// 	if (errors.length) {
// 		var classes = await Classes.find().sort({classId: -1});
// 		res.render('danh-sach-lop-moi', {
// 			errors: errors,
// 			values: req.body,
// 			classes: classes
// 		});
// 		return;
// 	}

// 	next();
// };