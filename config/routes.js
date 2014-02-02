'use strict';

module.exports = function(app, passport){
    //User Routes
    var users = require('../app/controllers/users');
    app.get('/signin', users.signin);
    app.get('/session', users.session);
    app.get('/contact', users.contact);

    //Setting the local strategy route
    app.post('/signin', passport.authenticate('local', {
        successRedirect: '/session',
        failureRedirect: '/signin',
        failureFlash: true
    }));

	app.get('*', function(req, res) {
	    res.sendfile('public/index.html');  // load the single view file (angular will handle the page changes on the front-end)
	});    

}