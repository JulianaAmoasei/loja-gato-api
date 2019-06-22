const Sequelize = require('sequelize');
const Product = require('../models/Product')
const sequelize = new Sequelize('postgres://bnwztuyofhjpit:cf62643bdabb3b91b8c2debba198b90cc016534b0255d90e1bf7c37669e22e6f@ec2-174-129-242-183.compute-1.amazonaws.com:5432/d9hodvne5eks0l',
  {dialect:"postgres", protocol: "postgres", dialectOptions: { ssl: true}});
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