var mongoose = require('mongoose');

var giasuSchema = new mongoose.Schema({
	ten: String,
	email: String,
	dienthoai: Number,
	gioitinh: String,
	namsinh: String,
	truong: String,
	nganh: String,
	nghenghiep: String,
	mon: String,
	lop: String,
	quan: String
});

var Giasu = mongoose.model('Giasu', giasuSchema, 'giasu');

module.exports = Giasu;