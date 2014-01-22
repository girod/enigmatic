'use strict';

var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;

var UserSchema = mongoose.Schema({ 
    username: String,
    password: String
});

UserSchema.methods.validPassword = function( pwd ) {
    // EXAMPLE CODE!
    return ( this.password === pwd );
};
var User = mongoose.model('User', UserSchema);

module.exports = function(passport) {

    //Use local strategy
    passport.use(new LocalStrategy(
      function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
          if (err) { return done(err); }
          if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
          }
          if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, user);
        });
      }
    ));

};