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
    res.sendfile('public/signin.html', {
        title: 'Signin',
        message: req.flash('error')
    });
};

/**
 * Show contact form
 */
exports.contact = function(req, res) {
    res.sendfile('public/contact.html', {
        title: 'Contact',
        message: req.flash('error')
    });
};

/**
 * Session
 */
exports.session = function(req, res) {
	res.redirect('/');
};