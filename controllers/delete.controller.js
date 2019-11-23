var Classes = require('../models/class.model');
var Giasu = require('../models/giasu.model');
var Phuhuynh = require('../models/phuhuynh.model');



module.exports.delClass = async function(req, res) {
	//console.table(req);
	//var data-id= req.body;
	var id=req.body;
	//console.log(id);
	Classes.deleteOne({ classId: id});
	var classes = await Classes.find();
	res.render('classes/create',{
		classes: classes
	});
};

module.exports.delGiasu = function(req, res) {
	//var data-id= req.body;
	Classes.deleteOne({ _id: data-id});
	res.redirect('/signup/giasu');
};

module.exports.delPhuhuynh = function(req, res) {
	//var data-id= req.body;
	Classes.deleteOne({ _id: data-id});
	res.redirect('/signup/phuhuynh');
};
