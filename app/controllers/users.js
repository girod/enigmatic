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
	res.send({connected: false, message:"Vous n'avez pas été reconnu, merci de saisir vos identifiants à nouveau"});
};

exports.session = function(req, res) {
    res.send({ connected: true, user: req.user, message:"Bienvenu, vous êtes connecté" });
};

exports.logout = function(req, res) {
	//req.logout();
	res.send({ connected: false, message:"Bienvenu, vous êtes déconnecté" });
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