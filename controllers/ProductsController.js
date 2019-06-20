const Product = require('../models/Product')

class ProductsController {
  
  constructor(){
  }

  getAll(){
    return Product.findAll()
  }

  get(productid){
    return {produto: "produto"}
  }

  insert(product){
    return new Product(
      product.name,
      product.description,
      product.type,
      )
  }

  update(product){
    return {status: "ok", produto: "produto"}
  }

  delete(productid){
    return {status: "ok", produto: "produto"}
  }
}

module.exports = ProductsController;