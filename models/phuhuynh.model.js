var mongoose = require('mongoose');

var phuhuynhSchema = new mongoose.Schema({
	ten: String,
	diachi: String,
	email: String,
	dienthoai: Number,
	lop: String,
	truong: String,
	gioitinh: String,
	monhoc: String,
	hocluc: String,
	songuoihoc: String,
	content: String
});

var Phuhuynh = mongoose.model('Phuhuynh', phuhuynhSchema, 'phuhuynh');

module.exports = Phuhuynh;