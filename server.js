var fs = require('fs');
var path = require('path');
var express = require('express');
var exhbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var url = require('url');

var app = express();
var port = process.env.PORT || 8080;


//var mysqlHost = process.env.MYSQL_HOST;
//var mysqlUser = process.env.MYSQL_USER;
//var mysqlPassword = process.env.cat;
var mysqlDB = process.env.MYSQL_DB;
var mysqlConnection = mysql.createConnection({
	host: "localhost",
	user: "newuser",
	passowrd: "cat",
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
		pageTitle:'main'
	});
});

app.post('/add-user', function(req,res){
	mysqlConnection.query(
		'INSERT (userid) VALUES (?)',
		[req.params.useID],
		function(err, result){
			if(err){
				console.log("--Error occured (",req.params.userID,") from database:", err);
				res.status(500).send("Error sending data to database: "+err);
			}
			else{
				res.status(200).send();
			}
		});
})

app.get('/:userID/test-page',function(req,res){
	var userID = req.params.userID;
	res.render('test-page',{
		pageTitle:'test',
		user: userID
	});
})

app.post('/:user/add-account', function(req,res){
	mysqlConnection.query(
		'INSERT INTO accounts (userID,accountID) VALUES(?,?)',
		[req.params.userID, req.params.accountID],
		function(err, result){
			if(err){
				console.log("--Error occured (",req.params.userID,") from database:", err);
				res.status(500).send("Error sending data to database: "+err);
			}
			else{
				res.status(200).send();
			}
		});
})


//code here

app.listen(port, function(){
	console.log("== Listining on port", port);
});