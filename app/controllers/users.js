'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    User = mongoose.model('users');

var passport = require('passport');

/**
 * Show login form
 */
exports.signin = function(req, res) {
	res.send({connected: false, message:"Vous n'avez pas été reconnu, merci de saisir vos identifiants à nouveau"});
};

exports.is_connected = function(req, res){
    if ( req.isAuthenticated() )
        res.send({ connected: true, user: req.user, message:"Bienvenu, vous êtes connecté" });
    else    
        res.send({connected: false});
};

exports.create = function(req, res){
	var newuser = new User(req.body);

    User.findOne({ username: newuser.username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {  //Le user n'existe pas
            User.create({ username: newuser.username, password: newuser.password, firstname: newuser.firstname, lastname: newuser.lastname  }, function(err){   //Création du user
                if (err) throw err;
                passport.authenticate('local')(req, res, function () {  //Authentification automatique et session passport
                    return res.send({ connected: true, user: newuser, message:"Bienvenu, vous êtes connecté" });        
                });
            }); 
        }
        else{
            return res.send({ connected: false, message:"Cet utilisateur est déjà enregistré" });        
        }
    });    
  
};

exports.session = function(req, res) {
    res.send({ connected: true, user: req.user, message:"Bienvenu, vous êtes connecté" });
};

exports.logout = function(req, res) {
	req.logout();
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