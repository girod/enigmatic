'use strict';

module.exports = function(app, passport){
    //User Routes
    var users = require('../app/controllers/users');
    var annonces = require('../app/controllers/annonces');

    app.get('/session', users.session);
    app.get('/contact', users.contact);
    app.get('/login', users.signin);

    //Setting the local strategy route
    app.get('/isconnected', users.is_connected);
    app.post('/logout', users.logout);
    app.post('/signup', users.create);
    app.post('/signin', passport.authenticate('local', {
        successRedirect: '/session',
        failureRedirect: '/login',
        failureFlash: true
    }));
    app.post('/register_annonce', annonces.register);

	app.get('*', function(req, res) {
	    res.sendfile('public/index.html');  // load the single view file (angular will handle the page changes on the front-end)
	});    

}