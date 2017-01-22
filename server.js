// Node modules
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
// create express app
var app = express();
//require mongoose
require('./server/config/mongoose.js');
//set up views
app.set("view engine", "html");
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
// public static
app.use(express.static(path.join(__dirname,"client", "static")))
app.use(express.static(path.join(__dirname, './bower_components')));
/*routes*/
require('./server/config/routes.js')(app);
//tell express app to listen to port
var port = 8000;
app.listen(port, function(){
	console.log("Listening on: "+port);
})
