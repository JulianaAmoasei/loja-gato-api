const Sequelize = require('sequelize');
const ImgProduct = require('../models/ImagesProduct_2')
// const PricesProduct = require('../models/PricesProduct_2')

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
}, { sequelize, modelName: 'Product' })

sequelize.sync()
  // .then(() => Product.create({
  //   name: "cogumelo",
  // }));

Product.hasMany(ImgProduct, {
    as: 'imagens_produto',
    foreignKey: 'productId'
});

// Product.hasMany(ImgProduct)
// Product.hasMany(PricesProduct)

module.exports = Product;