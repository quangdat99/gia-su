module.exports.postPhuhuynh = function (req, res, next) {
	var errors = [];

	if (!req.body.ten) {
		errors.push('Yêu cầu nhập Tên ');
	}

	if (!req.body.dienthoai) {
		errors.push('Yêu cầu nhập số Điên thoại ');
	}

	if (errors.length) {
		res.render('dktgs', {
			errors: errors,
			values: req.body
		});
		return;
	}

	next();
};

module.exports.postGiasu = function (req, res, next) {
	var errors = [];

	if (!req.body.ten) {
		errors.push('Yêu cầu nhập Tên ');
	}

	if (!req.body.email) {
		errors.push('Yêu cầu nhập Email ');
	}

	if (!req.body.dienthoai) {
		errors.push('Yêu cầu nhập số Điên thoại ');
	}

	if (errors.length) {
		res.render('dklgs', {
			errors: errors,
			values: req.body
		});
		return;
	}

	next();
};

module.exports.postCreate = function (req, res, next) {
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
		res.render('classes/create', {
			errors: errors,
			values: req.body
		});
		return;
	}

	next();
};
