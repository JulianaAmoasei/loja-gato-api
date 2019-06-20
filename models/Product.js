const Sequelize = require('sequelize');
const ImgProduct = require('../models/ImagesProduct')
const PriceProduct = require('../models/PricesProduct')

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
}, { sequelize, modelName: 'lista_produtos' })

sequelize.sync()
  // .then(() => Product.create({
  //   name: "Odo",
  //   priceValue: 500.01,
  //   priceInstallments: 10,
  //   priceInstallmentValue: 50.03,
  // }));

Product.hasMany(ImgProduct)
Product.hasOne(PriceProduct)

module.exports = Product;