var mongoose = require('mongoose'), Schema = mongoose.Schema;

/**
 * User Schema
 */
var UserSchema = mongoose.Schema({
	username: String,
	password : String,
	firstname: String,
	lastname : String
});

/**
 * Methods
 */
UserSchema.methods = {
	validPassword : function( pwd ) {
    	// EXAMPLE CODE!
    	return ( this.password === pwd );
	}
}

mongoose.model('users', UserSchema);