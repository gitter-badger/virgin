'use strict';
//
global.__root = __dirname
global.__api = [];
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
server.listen(port, function () {
	console.log('server listening on: '+port);
	
	if(process.getuid() == 0 ){
		console.log('Running as root')
	} else {
		console.log('Running as NON root')
	}
});