require('dotenv').config();

var express = require('express');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);


var classRoute = require("./routes/class.route");
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
app.get('/danh-sach-lop-moi', async function(req, res){

	var classes = await Classes.find();
	res.render('danh-sach-lop-moi', {
		classes: classes
	});
});
app.get('/cach-thuc-nhan-lop', function(req, res) {
	res.render('cach-thuc-nhan-lop');
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
app.use('/myaccount', myAccountRoute);
app.use('/signup',authMiddleware.requireAuth, signUpRoute);
app.use('/auth', authRoute);


app.listen(port, function () {
	console.log('Server listening on port '+ port);
});