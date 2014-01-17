// set up ======================================================================
var express  = require('express');
var app      = express();                                                                 // create our app w/ express

app.configure(function() {
        app.use(express.static(__dirname + '/public'));    // set the static files location /public/img will be /img for users
        app.use(express.logger('dev'));                    // log every request to the console
        app.use(express.bodyParser());                     // pull information from html in POST
        app.use(express.methodOverride());                 // simulate DELETE and PUT
});


var port = 5000;

// application -------------------------------------------------------------
app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);