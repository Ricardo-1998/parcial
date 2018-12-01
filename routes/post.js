var express = require('express');
var router = express.Router();
    PostController = require('../controllers/PostController');


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', PostController.getAll);

router.get('/:id', PostController.get);

router.post('/', PostController.create);

router.delete('/:id', PostController.delete);

router.put('/:id', PostController.update);




module.exports = router;