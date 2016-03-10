'use strict';
//
global.__root = __dirname
//
var express = require('express');
var exphbs  = require('express-handlebars');
var Handlebars = require('handlebars');
//
var fs = require('fs');
//
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//
var session = require('express-session');
//
var helpers = require(__root+'/app_modules/lib/helpers');
//
var app = express();
//
var server = app//https.createServer(options, app)
//
var port = 6666;
//
global.hbs = exphbs.create({
	defaultLayout: __root+'/app_modules/layouts/views/layouts/main',
	extname      : '.hbs',
	handlebars : Handlebars,
	helpers      : helpers,
	partialsDir: [
		__root+'/app_modules/layouts/views/partials/'
	]
});
//
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
//
app.disable('x-powered-by');
//
app.use(cookieParser());
//
var _app_limit = '50mb';
app.use(bodyParser.json({limit: _app_limit}));
app.use(bodyParser.urlencoded({limit: _app_limit, extended: true}));
//
global.route_accept = [];
//
var dir_modules = __root+'/app_modules/';
//
try {

	require(__root+'/app_modules/layouts/routes/router.js')(app);

} catch (err) {
	console.log('Module Router Not Found: '+err)
}
//
server.listen(port, function () {
	console.log('server listening on: '+port);
	
	if(process.getuid() == 0 ){
		console.log('Running as root')
	} else {
		console.log('Running as NON root')
	}
});