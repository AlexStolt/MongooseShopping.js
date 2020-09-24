const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	name: String,
	description: String
});


module.exports = mongoose.model('tshirts', schema);


