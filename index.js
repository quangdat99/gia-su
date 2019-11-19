require('dotenv').config();

var express = require('express');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);


var classRoute = require("./routes/class.route");
var signUpRoute = require("./routes/signUp.route");
var authRoute = require('./routes/auth.route');
var authMiddleware = require('./middlewares/auth.middleware');


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
app.get('/dang-ky-tim-gia-su', function(req, res) {
	res.render('dktgs');
});
app.get('/dang-ky-lam-gia-su', function(req, res) {
	res.render('dklgs');
});
app.get('/lienhe', function(req, res) {
	res.render('lienhe');
});
app.get('/admin',authMiddleware.requireAuth, function(req, res) {
	res.render('admin');
});



app.use('/classes', classRoute);
app.use('/signup',authMiddleware.requireAuth, signUpRoute);
app.use('/auth', authRoute);


app.listen(port, function () {
	console.log('Server listening on port '+ port);
});