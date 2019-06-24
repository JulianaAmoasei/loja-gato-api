const express = require('express');
const ProductsController = require('../controllers/ProductsController');
const prodController = new ProductsController()
const auth = require('../utils/auth')

const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/products', function(req, res, next) {
  auth.verifyToken(req.headers)
  .then(tokenIsValid => {
    if (tokenIsValid){
      prodController
      .getAll()
      .then(product => res.json(product))
    } else {
      res.send("TOKEN NOT VALID")
    }
  })
})

router.post('/product', function(req, res, next) {
  auth.verifyToken(req.headers)
  .then(tokenIsValid => {
    if (tokenIsValid){
      prodController
      .insert(req.body)
      .then(product => res.json(product))
    } else {
      res.send("TOKEN NOT VALID")
    }
  })
})

router.post('/auth', function(req, res, next) {
  res.send(auth.getToken({email: 'ju@ju.com'}))
});

router.post('/verify', function(req, res, next) {
  auth.verifyToken(req.headers)
  .then( usr => res.send(usr))
})

module.exports = router;
