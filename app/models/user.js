var mongoose = require('mongoose'), Schema = mongoose.Schema;

/**
 * User Schema
 */
var UserSchema = mongoose.Schema({
	username: String,
	password : String
});

/**
 * Methods
 */
UserSchema.methods = {
	validPassword : function( pwd ) {
    	// EXAMPLE CODE!
    	console.log(this.password + '   ' + pwd);
    	return ( this.password === pwd );
	}
}

mongoose.model('users', UserSchema);