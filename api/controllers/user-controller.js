'use strict'
const Product = require('../models/Product');

exports.createProduct = function (req, res) { 
    var newproduct = new Product(req.body);
    newproduct.save(function (err, product) { 
        if (err) { 
            res.status(400).json(err);
        }
        res.json(product); 
});
};

exports.getProduct = function (req, res) {
    Product.findOne({_id: req.params.id}, function (err, product) {
        /*if (err) return res.status(500).send({message : 'Erroor'});
      if (!products) return res.status(404).send({message: 'Product does not exist'});*/
if (err) {
        res.status(400).json(err);
    }
    res.json(product);
    });
};

exports.getProducts = function (req, res) {

Product.find({}, (err, products) => {
    console.log('Testing');
    if (err) return res.status(500).send({message : 'Erroor'});
    if (!products) return res.status(404).send({message: 'Product does not exist'});
    res.send(200,{products });
});

};

exports.updateProduct = function (req, res){
    product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, product) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(product);
    });
};

exports.saveProduct = function (req, res) {

    Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, product) {
    if (err) {
        res.status(400).json(err);
    }
    res.json(product);
    });
};

exports.deleteProduct  = function (req, res) {
    Product.findByIdAndRemove(re.params.id, (err, product) => {
    if (err) { res.status(400).json(err);
    }
    res.json(product);
    });
};