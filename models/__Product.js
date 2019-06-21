const Sequelize = require('sequelize')
const ImgProduct = require('../models/ImagesProduct_2')
// const PriceProduct = require('../models/PricesProduct_2')

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://loja_gato_usr:admin123@localhost:5432/loja_gato');
const Op = Sequelize.Op

class Product extends Sequelize.Model {}

Product.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //images
  //prices
}, { sequelize, modelName: 'lista_produto' })

sequelize.sync()
  .then(() => Product.create({
    name: "Satanás"
  }));

Product.hasMany(ImgProduct)
// Product.hasOne(PriceProduct)

module.exports = Product;