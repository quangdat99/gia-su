var express = require('express');
var app = express();

var classRoute = require("./routes/class.route");

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('index');
});

app.use('/classes', classRoute);


app.listen(port, function () {
	console.log('Server listening on port '+ port);
});