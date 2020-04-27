'use strict'
const express = require('express');
const path = require('path');
const userCtrl = require('../controllers/user-controller');
const router = express.Router();

/*router.use(express.static(path.resolve(__dirname, 'views'))); //We define the views folder as the one where all static content will be served
router.use(express.urlencoded({extended: true})); //We allow the data sent from the client to be coming in as part of the URL in GET and POST requests
router.use(express.json()); //We include support for JSON that is coming from the client
*/
//We define the root of our website and render index.html located inside the views folder

router.get('/', function(req, res){

    res.render('index');

})

router.post('/', userCtrl.saveProduct);
router.get('/Product', userCtrl.getProducts);
router.get('/Product/:id', userCtrl.getProduct);
router.delete('/Product/:id', userCtrl.deleteProduct);
router.put('/Product/:id', userCtrl.updateProduct);

module.exports.UPLOAD_PATH = 'uploads';

var multer = require('multer');
var upload = multer({ dest: module.exports.UPLOAD_PATH });

//router.post('/users', upload.fields('users'), userCtrl.uploads);

module.exports = router;