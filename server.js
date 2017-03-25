var fs = require('fs');
var path = require('path');
var express = require('express');
var exhbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var url = require('url');

var app = express();
var port = process.env.PORT || 8080;


var mysqlHost = process.env.MYSQL_HOST;
var mysqlUser = process.env.MYSQL_USER;
var mysqlPassword = process.env.MYSQL_PASSWORD;
var mysqlDB = process.env.MYSQL_DB;
var mysqlConnection = mysql.createConnection({
	host: mysqlHost,
	user: mysqlUser,
	passowrd: mysqlPassword,
	database: mysqlDB
});


app.engine('handlebars', exhbs({ defaultLayout: 'main' }))

app.set('view engine','handlebars');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public' )), function(req,res,next){
	var pathname=url.parse(req.url).pathname;
	console.log("Received request for "+pathname);
	next();
});

app.get('/', function (req, res) {
	res.render('index-page', {
		pateTitle:'main'
	});
});

app.post('/add-user', function(req,res){
	mysqlConnection.query(
		'INSERT (userid) VALUES (?)',
		[req.params.useID],
		function(err,result){
			res.render('test-page', {
				pageTitle:'main'
			});
		});
})


//code here

app.listen(port, function(){
	console.log("== Listining on port", port);
});