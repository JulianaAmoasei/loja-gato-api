const Sequelize = require('sequelize');
const ImgProduct = require('../models/ImagesProduct')
const PricesProduct = require('../models/PricesProduct')

const sequelize = new Sequelize('postgres://bnwztuyofhjpit:cf62643bdabb3b91b8c2debba198b90cc016534b0255d90e1bf7c37669e22e6f@ec2-174-129-242-183.compute-1.amazonaws.com:5432/d9hodvne5eks0l',
  {dialect:"postgres", protocol: "postgres", dialectOptions: { ssl: true}});
const Op = Sequelize.Op

class Product extends Sequelize.Model {}

Product.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //images
  //prices
}, { sequelize, modelName: 'Product' })

sequelize.sync()
  // .then(() => Product.create({
  //   name: "cogumelo",
  // }));

Product.hasMany(ImgProduct, {
    as: 'imagens_produto',
    foreignKey: 'productId'
});

Product.hasOne(PricesProduct, {
    as: 'precos_produto',
    foreignKey: 'productId'
});

module.exports = Product;