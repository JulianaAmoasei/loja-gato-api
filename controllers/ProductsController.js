const Product = require('../models/Product_2')
const ImgProduct = require('../models/ImagesProduct_2')
// const PricesProduct = require('../models/PricesProduct_2')

class ProductsController {
  
  constructor(){
  }

  getAll(){
    return Product.findAll({include: ['imagens_produto']})
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