'use strict'
const express = require('express');
const userCtrl = require('../controllers/user-controller');
const router = express.Router();

router.post('/', userCtrl.saveProduct);
router.get('/users', userCtrl.getProducts);
router.get('/users/:Product', userCtrl.getProduct);
router.delete('/users/:Product', userCtrl.deleteProduct);
router.put('/users/:Product', userCtrl.updateProduct);

module.exports.UPLOAD_PATH = 'uploads';

var multer = require('multer');
var upload = multer({ dest: module.exports.UPLOAD_PATH });

//router.post('/users', upload.fields('users'), userCtrl.uploads);

module.exports = router;