'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Annonce = mongoose.model('annonces');


exports.register = function(req, res) {
	var myAnnonce = new Annonce({ region: req.body.region, sujet: req.body.sujet, comments: req.body.comments });
	req.session.annonce = myAnnonce._id;

	if ( req.isAuthenticated() ){
		res.send({ connected: true, user: req.user, message:"Bienvenu, vous êtes connecté" });
	}
	else{
		res.send({connected: false});
	}

};    