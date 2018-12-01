var express = require('express');
var router = express.Router();
    PostController = require('../controllers/PostController');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/', PostController.create);


module.exports = router;