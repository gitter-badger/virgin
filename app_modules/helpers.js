'use strict';

var Handlebars = require('handlebars');

exports.ifIn = function(elem, list, options) {
	
	var string = elem,
	substrings = list.split(',');

	for (var i = 0; i < substrings.length; i++) {

		if(string.indexOf(substrings[i]) > -1) {
			return options.fn(this);
		}

	};
	return options.inverse(this);
};

Handlebars.unregisterHelper('ifIn');
