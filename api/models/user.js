var mongoose = require( 'mongoose');

var userSchema = new mongoose. Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Item: String,
    Price: Number
});

module. exports = mongoose.model('User', userSchema);