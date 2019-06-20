const Product = require('../models/Product')
const ImgProduct = require('../models/ImagesProduct')
const PricesProduct = require('../models/PricesProduct')

class ProductsController {
  
  constructor(){
  }

  getAll(){
    return Product.findAll({include: [ImgProduct, PricesProduct]})
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