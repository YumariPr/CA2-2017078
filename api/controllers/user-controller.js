'use strict'
const Product = require('../models/user');

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
        
      if (err) return res.status(500).send({message : 'Erroor'});
      if (!products) return res.status(404).send({message: 'Product does not exist'});

    res.send(200,{products });
    });
};

exports.getProducts = function (req, res) {

Product.find({}, (err, products) => {
    if (err) return res.status(500).send({message : 'Erroor'});
    if (!products) return res.status(404).send({message: 'Product does not exist'});

    res.send(200,{products });
});

};

exports.updateProduct = function (req, res){
   console.log('POST /api/product');
   console.log(req.body);

    let product = new Product();
    product.item = req.body.item;
    product.price = req.body.price;
    
    product.save((err, productStored) => {
        if (err) res.status(500).send({message : 'Error to saved the product in the data base'});

        res.send(200).send({product: productStored });
    });
};

exports.saveProduct = function (req, res) {

    Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, product) {
    if (err) res.status(500).send({message : 'Error to update the product in the data base'});

    res.status(200).send({product: productUpdated });
    });
};

exports.deleteProduct  = function (req, res) {
    let productId = req.params.Product
    console.log(productId);
    Product.findById(productId, (err, product) => {
    if (err) res.status(500).send({message : 'Error to delete the product in the data base'});

    product.remove(err => {
        if (err) res.status(500).send({message: 'Error to the delete the product'});
        res.status(200).send({message : 'Product Removed'});
    });
    });
};