'use strict'
var express = require('express'),
router = express.Router(),
userCtrl = require('./api/routes/user-controller');


router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:Product', userCtrl.getUser);
router.delete('/users/:Product', userCtrl.deleteUser);
router.put('/users/:Product', userCtrl.updateUser);

module.exports.UPLOAD_PATH = 'uploads';

var multer = require('multer');
var upload = multer({ dest: module.exports.UPLOAD_PATH });

//router.post('/users', upload.fields('users'), userCtrl.upload);


module.exports = router;