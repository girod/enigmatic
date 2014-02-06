var mongoose = require('mongoose'), Schema = mongoose.Schema;

/**
 * User Schema
 */
var AnnonceSchema = mongoose.Schema({
	region: String,
	sujet : String,
	comments : String
});

/**
 * Methods
 */
AnnonceSchema.methods = {
	create : function() {
		console.log("coucou");
	}
}

mongoose.model('annonces', AnnonceSchema);