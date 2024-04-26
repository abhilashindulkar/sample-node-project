/*

REQUIRED PACKAGES ARE LOADING...

*/
var http = require('http');
var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3005); // INPUT PORT SET
app.set('views', __dirname + '/app/server/views'); // VIEW FOLDER INTRODUCED
app.set('view engine', 'ejs'); // VIEW ENGINE
app.use(express.static(__dirname + '/app/public')); // A FOLDER ACCESSIBLE BY USERS HAS BEEN DEFINED
require('./app/routes')(app); // ROUTE FILE CALLED

/*

HTTP SERVER HAS BEEN CREATED
*/
http.createServer(app).listen(app.get('port'), function(){
	console.log('System ' + app.get('port') + ' Working on Port.');
});
