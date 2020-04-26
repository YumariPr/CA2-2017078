'use strict'
const Product = require('../models/user');

function getProduct (req, res) {
    let productId = req.params.Product
    console.log(req.params);
    Product.findById(productId, (err, products) => {
        console.log(productId);
      if (err) return res.status(500).send({message : 'Erroor'})
      if (!products) return res.status(404).send({message: 'Product does not exist'})

    res.send(200,{products })
  
    })
}

function getProducts (req, res) {

Product.find({}, (err, products) => {
    if (err) return res.status(500).send({message : 'Erroor'})
    if (!products) return res.status(404).send({message: 'Product does not exist'})

    res.send(200,{products })
})

}

function saveProduct (req, res){
   console.log('POST /api/product');
   console.log(req.body);

    let product = new Product();
    product.item = req.body.item;
    product.price = req.body.price;
    
    product.save((err, productStored) => {
        if (err) res.status(500).send({message : 'Error to saved the product in the data base'})

        res.send(200).send({product: productStored })
    
    })
}

function updateProduct (req, res) {
let productId = req.params.productId
let update = req.body

Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
    if (err) res.status(500).send({message : 'Error to update the product in the data base'})

    res.status(200).send({product: productUpdated })
    })
}

function deleteProduct (req, res) {
    let productId = req.params.Product
    console.log(productId);
    Product.findById(productId, (err, product) => {
    if (err) res.status(500).send({message : 'Error to delete the product in the data base'})

    product.remove(err => {
        if (err) res.status(500).send({message: 'Error to the delete the product'})
        res.status(200).send({message : 'Product Removed'})
    })
    })
}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}