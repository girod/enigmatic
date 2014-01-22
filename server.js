// set up ====================================================================
var express  = require('express');
var flash = require('connect-flash');
var mongoose = require('mongoose');	// mongoose for mongodb
var passport = require('passport');

//bootstrap passport config
require('./config/passport')(passport);

var app      = express();       // create our app w/ express
var port = 8080;

// configuration ===============================================================

var mongoUri = process.env.MONGOLAB_URI ||  'mongodb://localhost/enigmatic';
mongoose.connect(mongoUri);         // connect to mongoDB database on modulus.io

app.configure(function() {
        app.use(express.static(__dirname + '/public'));    // set the static files location /public/img will be /img for users
        app.use(express.logger('dev'));                    // log every request to the console
        app.use(express.bodyParser());                     // pull information from html in POST
        app.use(express.methodOverride());                 // simulate DELETE and PUT  
        app.use(express.cookieParser('keyboard cat'));
        app.use(express.session({ cookie: { maxAge: 60000 }}));
        app.use(flash());
});


// define model ================================================================
/*var User = mongoose.model('User', {
        text : String,
        done : Boolean
});
*/

// routes ======================================================================

// api ---------------------------------------------------------------------
app.post('/users/sign_in',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: 'Invalid username or password.' })
);

// create user and redirect to personnal space
app.get('/api/users', function(req, res) {
        res.json({ user: 'tobi' })
/*        // create a todo, information comes from AJAX request from Angular
        User.create({
                text : req.body.text,
                done : false
        }, function(err, todo) {
                if (err)
                        res.send(err);

                // get and return all the todos after you create another
                Todo.find(function(err, todos) {
                        if (err)
                                res.send(err)
                        res.json(todos);
                });
        });*/

});

// application -------------------------------------------------------------
app.get('*', function(req, res) {
        res.sendfile('./public/index.html');  // load the single view file (angular will handle the page changes on the front-end)
});

// listen (start app with node server.js) ======================================
app.listen(process.env.PORT || 8080);
console.log("App listening on port " + port);