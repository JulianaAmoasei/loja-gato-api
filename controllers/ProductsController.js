// const Product = require('../models/product')

class ProductsController {
  constructor(){

  }

  getAll(){
    return [
  {
    "product": {
        "id": 2321312,
        "name": "Smartphone Apple iPhone 7 128GB",
        "images": [
            "https://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb_600x600-PU98460_1.jpg",
            "https://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb/__200x400-PU98460_2_c.jpg?v=2347575274",
            "https://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb/__200x400-PU98460_3_c.jpg?v=318433138",
            "https://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb/__200x400-PU98460_4_c.jpg?v=33273730"
        ],
        "price": {
            "value": 3509.10,
            "installments": 10,
            "installmentValue": 389.90
        }
      }
    }
  ]
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