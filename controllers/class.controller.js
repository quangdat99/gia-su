var Classes = require('../models/class.model')




module.exports.search = async function(req, res) {
	var q = req.query.q;
	var classes = await Classes.find().sort({classId: -1});
	var result = classes.filter(function(_class){
		return (_class.subject.toLowerCase()
							  .normalize("NFD")
						      .replace(/[\u0300-\u036f]/g, "")
						      .replace(/đ/g, "d")
						      .replace(/Đ/g, "D")
						      

						      .indexOf(q
						      .toLowerCase()
						      .normalize("NFD")
						      .replace(/[\u0300-\u036f]/g, "")
						      .replace(/đ/g, "d")
						      .replace(/Đ/g, "D")) !== -1)
		||	 (_class.address.toLowerCase()
							  .normalize("NFD")
						      .replace(/[\u0300-\u036f]/g, "")
						      .replace(/đ/g, "d")
						      .replace(/Đ/g, "D")
						      

						      .indexOf(q
						      .toLowerCase()
						      .normalize("NFD")
						      .replace(/[\u0300-\u036f]/g, "")
						      .replace(/đ/g, "d")
						      .replace(/Đ/g, "D")) !== -1)		
		});
	
	
	res.render('danh-sach-lop-moi', {
		classes: result,
		values: q
	});
}

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
