var mongoose = require( 'mongoose');
var userSchema = new mongoose. Schema({
    Item: String,
    Price: Double
});

module. exports = mongoose.model('User', userSchema);