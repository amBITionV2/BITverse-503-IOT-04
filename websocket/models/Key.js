const mongoose = require('mongoose');

const keySchema = new mongoose.Schema({
  	identity: {
		userId: String,
		eccPublicKey: String,
		pqcPublicKey: String,
		timestamp: String
  	},
  	signature: {
	    type: String,
	    required: true,
  	}
});

const Key = mongoose.model("Key", keySchema);

module.exports = Key;
