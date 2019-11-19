var mongoose = require('mongoose');

var classSchema = new mongoose.Schema({
	classId: String,
	subject: String,
	address: String,
	price: String,
	require: String
});

var Classes = mongoose.model('Classes', classSchema, 'classes');

module.exports = Classes;