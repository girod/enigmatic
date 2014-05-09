// set up ====================================================================
var express  = require('express');
var flash = require('connect-flash');
var mongoose = require('mongoose');	// mongoose for mongodb
var passport = require('passport');

//Models
require('./app/models/user.js');
require('./app/models/annonce.js');

//bootstrap passport config
require('./config/passport')(passport);

var app      = express();       // create our app w/ express
var port = 8080;

// configuration ===============================================================

var mongoUri = process.env.MONGOLAB_URI ||  'mongodb://localhost/enigmatic';
mongoose.connect(mongoUri);         //connect to mongoDB database


app.configure(function() {
        app.use(express.static(__dirname + '/public'));    // set the static files location /public/img will be /img for users
        app.use(express.logger('dev'));                    // log every request to the console
        app.use(express.bodyParser());                     // pull information from html in POST
        app.use(express.methodOverride());                 // simulate DELETE and PUT  
        app.use(express.cookieParser('keyboard cat'));
        app.use(express.session({ secret: '74pOjjAP', cookie: { maxAge: 960000 }}));
        app.use(flash());
        app.use(passport.initialize());
        app.use(passport.session());        
});


//Bootstrap routes
require('./config/routes')(app, passport);

// listen (start app with node server.js) ======================================
app.listen(process.env.PORT || 8080);
console.log("App listening on port " + port);

