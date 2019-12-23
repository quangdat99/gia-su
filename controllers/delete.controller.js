var Classes = require('../models/class.model');
var Phuhuynh = require('../models/phuhuynh.model');



module.exports.delClass = async function(req, res, next) {
	var id = parseInt(req.params.id);
	Classes.findOne({ classId: id}).remove(function() { 
		res.redirect('/classes/create');
	});
};


module.exports.delPhuhuynh = function(req, res, next) {
	var id = req.params.id;
	Phuhuynh.findOne({ _id: id}).remove(function() { 
		res.redirect('/signup/phuhuynh');
	});
};
