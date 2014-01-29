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
    res.sendfile('public/index.html', {
        title: 'Signin',
        message: req.flash('error')
    });
};

/**
 * Show contact form
 */
exports.contact = function(req, res) {
    res.sendfile('public/index.html', {
        title: 'Contact',
        message: req.flash('error')
    });
};