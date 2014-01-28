'use strict';

module.exports = function(app, passport){
    //User Routes
    var users = require('../app/controllers/users');
    app.get('/signin', users.signin);
    app.get('/contact', users.contact);

    //Setting the local strategy route
    app.post('/users/session', passport.authenticate('local', {
        failureRedirect: '/signin',
        failureFlash: true
    }), users.session);

	app.get('*', function(req, res) {
	    res.sendfile('./public/index.html');  // load the single view file (angular will handle the page changes on the front-end)
	});    

}