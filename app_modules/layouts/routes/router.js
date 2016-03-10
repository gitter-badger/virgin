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
			//
			//if ( req.session.user == undefined ){

			//	res.redirect( '/login' );

			//}else{
				//
				try{
					
					var _username = req.session.user.username;
					var _avatar = req.session.user.avatar;

					var _avatar = '/public/global_tmp/user_avatars/'+_username+'.png';


				}catch(e){

					var _avatar = '/public/global_tmp/user_avatars/'+_username+'.png';
					
				}
				//

				var data = {
					
					module_name: 'layout',
					module_version: '0.0.02',
					layout: __root+'/app_modules/layouts/views/layouts/main',
					title: 'Welcome Home',
					message: '',
					logged: logged_status,
					user_avatar : _avatar,
					userdata: req.session.user

				};
				console.log('USER'+req.session.user)
				res.render(__root+'/app_modules/layouts/views/home', data);
			//}
		});
		
	}


};
