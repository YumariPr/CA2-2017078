var mongoose = require( 'mongoose');

var userSchema = new mongoose. Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    item: String,
    price: Number
});

module. exports = mongoose.model('Product', userSchema);