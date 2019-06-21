const Sequelize = require('sequelize');
const Product = require('../models/Product')
const sequelize = new Sequelize('postgres://loja_gato_usr:admin123@localhost:5432/loja_gato');
const Op = Sequelize.Op

class ImgProduct extends Sequelize.Model {}

ImgProduct.init({
  order: Sequelize.INTEGER,
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Products',
      key: 'id'
    }
  },
  path: Sequelize.STRING,
}, { sequelize, modelName: 'ImgProduct' })

sequelize.sync()
  // .then(() => ImgProduct.create({
  //   order: 1,
  //   productId: 3,
  //   path: 'https://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb_600x600-PU98460_1.jpg'
  // }));

module.exports = ImgProduct;