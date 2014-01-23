'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    User = mongoose.model('users');

/**
 * Show login form
 */
exports.signin = function(req, res) {
	res.sendfile('./public/signin.html');  // load the single view file (angular will handle the page changes on the front-end)
};

/**
 * Session
 */
exports.session = function(req, res) {
	console.log(req.user); // Undefined
    if(req.isAuthenticated()) { // false
        console.log('HI');
    }
	res.sendfile('./public/auth.html');  // load the single view file (angular will handle the page changes on the front-end)
};