var Classes = require('../models/class.model')


// module.exports.index = async function(req, res){

// 	var classes = await Classes.find();
// 	res.render('classes/index', {
// 		classes: classes
// 	});
// };

module.exports.view = async function(req, res) {
	var id = req.params.id;
	var classes = await Classes.findOne({classId: id});
	res.render('classes/view', {
		classes: classes
	});
}

module.exports.create = async function(req, res) {

	var classes = await Classes.find();
	res.render('classes/create', {
		classes: classes
	});

};

module.exports.postCreate = function(req, res) {
	Classes.create(req.body);
	res.redirect('/classes/create');
};
