'use strict'
var User = require('./api/models/user');

exports.createUser = function(req, res) { 
    var newuser = new User(req.body);
    newuser.save(function (err, user) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(user); 
});
};

exports.getUsers = function(req, res) {
  User.find({}, function (err, users) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(users);
  }); 
};

exports.getUser = function(req, res) {
  User.findOne({_Product: req.params.Product}, function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};

exports.updateUser = function(req, res) {
  User.findOneAndUpdate({_Product: req.params.Product}, req.body, {new: true},function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};

exports.deleteUser = function(req, res) {
  User.findByIdAndRemove(req.params.Product, function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};