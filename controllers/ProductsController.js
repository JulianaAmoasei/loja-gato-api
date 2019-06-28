const models = require('../models');
const Product = models.Product;
const ImgProduct = models.ImgProduct;
const PricesProduct = models.PricesProduct;

class ProductsController {

  static getAll() {
    return Product.findAll({include: ['imagens_produto', 'precos_produto']})
  }

  static get(id){
    return Product
      .findByPk(id, {include: ['imagens_produto', 'precos_produto']})
  }

  static async insert(product){
    let newProduct = await Product.create({name: product.name});

    await product.imagens_produto.forEach(async(img, indice) => await ImgProduct
      .create({order: indice, productId: newProduct.id, path: img.path}))
    await PricesProduct
    .create({value: product.precos_produto.value, installments: product.precos_produto.installments, installmentValue: product.precos_produto.installmentValue, productId: newProduct.id})
    return Product
    .findByPk(newProduct.id, {include: ['imagens_produto', 'precos_produto']})
  }

  static async update(product){
    let updatedProduct = await Product.update(
      {name: product.name}
      )
    await product.imagens_produto.forEach(async(img, indice) => await ImgProduct
      .update({order: indice, productId: updatedProduct.id, path: img.path}))
    await PricesProduct
    .update({value: product.precos_produto.value, installments: product.precos_produto.installments, installmentValue: product.precos_produto.installmentValue, productId: updatedProduct.id})
    return Product
    .findByPk(updatedProduct.id, {include: ['imagens_produto', 'precos_produto']})
  }

  static delete(productid){
    return {status: "ok", produto: "produto"}
  }
}

module.exports = ProductsController;