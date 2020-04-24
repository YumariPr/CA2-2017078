'use strict'
var logger = require("morgan"),
cors = require("cors"),
http = require("http"),
express = require("express"),
bodyParser = require("body-parser"),
mongoose = require('mongoose');
require('dotenv').config();


var app = require('./app');

var port = process.env.PORT || 3000;
var userCtrl = require('./api/routes/user-controller');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(require('./api/routes/routes'));

app.listen(port, function(err){
    console.log("Listening on Port: " + port);
    console.log("MongoDB: " + process.env.MONGODB_URL);
});

mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});