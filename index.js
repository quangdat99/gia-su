require('dotenv').config();

var express = require('express');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);


var classRoute = require("./routes/class.route");
var deleteRoute = require("./routes/delete.route");
var signUpRoute = require("./routes/signUp.route");
var authRoute = require('./routes/auth.route');
var myAccountRoute = require('./routes/myAccount.route');
var authMiddleware = require('./middlewares/auth.middleware');
var Classes = require('./models/class.model')


var port = 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('index');
});
app.get('/dang-ky-thue-gia-su', function(req, res) {
	res.render('dang-ky-thue-gia-su');
});
app.get('/dang-ky-lam-gia-su', function(req, res) {
	res.render('dang-ky-lam-gia-su');
});
app.get('/danh-sach-lop-moi',async function(req, res, next){
	var perPage = 5;
	var page = parseInt(req.query.page) || 1;

	var classes = await Classes.find().sort({classId: -1})
								.skip((perPage * page) - perPage).limit(perPage);
							   
	var count = await Classes.find().count();
	var pages = Math.ceil(count / perPage);

	res.render('danh-sach-lop-moi', {
		classes: classes,
		pages: pages,
		current: page
	});
});
app.get('/cach-thuc-nhan-lop', function(req, res) {
	res.render('cach-thuc-nhan-lop');
});
app.get('/dang-ky-nhan-lop/:id', async function(req, res) {
	var id = parseInt(req.params.id);
	var classes = await Classes.findOne({ classId: id});
	res.render('dang-ky-nhan-lop', {
		classes: classes
	});
});
app.get('/thong-tin-tai-khoan', function(req, res) {
	res.render('thong-tin-tai-khoan');
});
app.get('/chinh-sach-hoan-phi', function(req, res) {
	res.render('chinh-sach-hoan-phi');
});
app.get('/chinh-sach-hoc-thu', function(req, res) {
	res.render('chinh-sach-hoc-thu');
});
app.get('/lien-he', function(req, res) {
	res.render('lien-he');
});
app.get('/admin',authMiddleware.requireAuth, function(req, res) {
	res.render('admin');
});
app.get('/login', function(req, res) {
	res.render('login');
});
app.get('/register', function(req, res) {
	res.render('register');
});


app.use('/classes', classRoute);
app.use('/delete', deleteRoute);
app.use('/myaccount',authMiddleware.requireLogin, myAccountRoute);
app.use('/signup', signUpRoute);
app.use('/auth', authRoute);


app.listen(port, function () {
	console.log('Server listening on port '+ port);
});