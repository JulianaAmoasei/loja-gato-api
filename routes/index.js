const express = require('express');
const ProductsController = require('../controllers/ProductsController');
const prodController = new ProductsController()

const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/products', function(req, res, next) {
  res.send(prodController.getAll());
});

module.exports = router;
