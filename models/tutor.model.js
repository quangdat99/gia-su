var mongoose = require('mongoose');

var tutorSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String
});

var Tutor = mongoose.model('Tutor', tutorSchema, 'tutor');

module.exports = Tutor;