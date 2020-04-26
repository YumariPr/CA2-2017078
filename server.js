http = require("http");
var logger = require("morgan");
cors = require("cors");
express = require("express");
bodyParser = require("body-parser");
mongoose = require('mongoose');
app = express();
require('dotenv').config();
//var app = require('./app');

var port = process.env.PORT || 3000;
//var userCtrl = require('./api/controller/user-controller');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('./api/routes/routes'));

mongoose.connect(process.env.MONGO_URL);

mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});

mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});

app.listen(port, function(err){
    console.log("Listening on Port: " + port);
    console.log("MongoDB: " + process.env.MONGO_URL);
});
module.exports = app;