'use strict'
var logger = require("morgan"),
cors = require("cors"),
http = require("http"),
express = require("express"),
bodyParser = require("body-parser"),
mongoose = require('mongoose');


var app = express();
var port = process.env.PORT || 3000;
var userCtrl = require('./user-controller');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(require('./routes'));

app.post('/users', userCtrl.createUser);
app.get('/users', userCtrl.getUsers);
app.get('/users/:Product', userCtrl.getUser);
app.delete('/users/:Product', userCtrl.deleteUser);
app.put('/users/:Product', userCtrl.updateUser);

app.listen(port, function(err){
    console.log("Listening on Port: " + port)
});

mongoose.connect('mongodb+srv://test:<cctestuser>@cluster0-99xuy.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});