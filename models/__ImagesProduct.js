const Sequelize = require('sequelize');
const Product = require('../models/Product_2')
const sequelize = new Sequelize('postgres://loja_gato_usr:admin123@localhost:5432/loja_gato')
const Op = Sequelize.Op

class ImgProduct extends Sequelize.Model {}

ImgProduct.init({
  order: Sequelize.INTEGER,
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'lista_produtos',
      key: 'id'
    }
  },
  path: Sequelize.STRING,
}, { sequelize, modelName: 'img_product' })

sequelize.sync()
  // .then(() => ImgProduct.create({
  //   order: 1,
  //   productId: 1,
  //   path: 'churru.jpg',
  // }));

module.exports = ImgProduct;