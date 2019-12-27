var Tutor = require('../models/tutor.model');


module.exports.index = async function(req, res) {
	var tutor = await Tutor.findOne({id: req.signedCookies.tutorId });
	res.render('myaccount/index',{
		tutor: tutor
	});

};

module.exports.update = async function(req, res) {
	
	var name = req.body.name;
	var phone = req.body.phone;
	var gioitinh = req.body.gioitinh;
	var namsinh = req.body.namsinh;
	var truong = req.body.truong;
	var nganh = req.body.nganh;
	Tutor.findOne({ id: req.signedCookies.tutorId}).update({ name: name, phone: phone, gioitinh: gioitinh, namsinh: namsinh, truong: truong, nganh: nganh},function() { 
		res.redirect('/myaccount');
	});

};
