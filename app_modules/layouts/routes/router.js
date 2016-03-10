var express = require('express'),
	exphbs  = require('express-handlebars'); // "express-handlebars"

module.exports = function(app, router) {

	app.use(express.static(__root+'/app_modules/layouts/public/'));

	if (app){

		try{

			logged_status = req.session.user.logged;

		}catch(e){

			logged_status = false;

		}

		app.get('/', function (req, res) {

				var data = {
					
					module_name: 'layout',
					module_version: '0.0.02',
					layout: __root+'/app_modules/layouts/views/layouts/main',
					title: 'Welcome Home',
					message: ''

				};
				
				res.render(__root+'/app_modules/layouts/views/home', data);
			
		});
		
	}


};
