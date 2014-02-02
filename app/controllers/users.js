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
	res.send({message:'Merci de saisir vos identifiants'});
};

exports.session = function(req, res) {
    res.send({ id: req.user.id, message:'Bienvenu, vous êtes connecté' });
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