const express = require('express');
const ProductsController = require('../controllers/ProductsController');
const auth = require('../utils/auth')

const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/products', auth.verifyToken, function(req, res, next) {
  ProductsController
    .getAll()
    .then(product => res.json(product))
})

router.post('/product', auth.verifyToken, function(req, res, next) {
  ProductsController
    .insert(req.body)
    .then(product => res.json(product))
})

router.post('/auth', function(req, res, next) {
  res.send(auth.getToken({email: 'ju@ju.com'}))
});

router.post('/verify', function(req, res, next) {
  auth.verifyToken(req.headers)
  .then( usr => res.send(usr))
})

module.exports = router;
