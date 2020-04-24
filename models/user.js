var mongoose = require( 'mongoose');

var userSchema = new mongoose. Schema({
    Item: String,
    Price: Number
});

module. exports = mongoose.model('User', userSchema);