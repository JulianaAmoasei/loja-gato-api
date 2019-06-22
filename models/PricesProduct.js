const Sequelize = require('sequelize');
const Product = require('../models/Product')
const sequelize = new Sequelize('postgres://bnwztuyofhjpit:cf62643bdabb3b91b8c2debba198b90cc016534b0255d90e1bf7c37669e22e6f@ec2-174-129-242-183.compute-1.amazonaws.com:5432/d9hodvne5eks0l',
  {dialect:"postgres", protocol: "postgres", dialectOptions: { ssl: true}});
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
      model: 'Products',
      key: 'id'
    }
  },
}, { sequelize, modelName: 'PricesProduct' })

sequelize.sync()
  // .then(() => PricesProduct.create({
  //   value: 5.00,
  //   installments: 5,
  //   installmentValue: 4.00,
  //   productId: 1,
  // }));

module.exports = PricesProduct;