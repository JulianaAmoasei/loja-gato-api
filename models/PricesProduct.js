const Sequelize = require('sequelize');
const Product = require('../models/Product')
const sequelize = new Sequelize('postgres://loja_gato_usr:admin123@localhost:5432/loja_gato');
const Op = Sequelize.Op

class PricesProduct extends Sequelize.Model {}

PricesProduct.init({
  value: Sequelize.DECIMAL(10,2),
  installments: Sequelize.INTEGER,
  installmentValue: Sequelize.DECIMAL(10,2),
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Product',
      key: 'id'
    }
  },
}, { sequelize, modelName: 'PricesProduct' })

sequelize.sync()
  .then(() => PricesProduct.create({
    value: 5.00,
    installments: 5,
    installmentValue: 4.00,
    productId: 1,
  }));

module.exports = PricesProduct;