const Sequelize = require('sequelize');
const ImgProduct = require('../models/ImagesProduct')

const sequelize = new Sequelize('postgres://loja_gato_usr:admin123@localhost:5432/loja_gato');//URI do banco vai aqui
const Op = Sequelize.Op

class Product extends Sequelize.Model {}

Product.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //images
  priceValue: Sequelize.DECIMAL(10,2),
  priceInstallments: Sequelize.INTEGER,
  priceInstallmentValue: Sequelize.DECIMAL(10,2),
}, { sequelize, modelName: 'product' })

sequelize.sync()
  // .then(() => Product.create({
  //   name: "cogumelo",
  //   priceValue: 500.01,
  //   priceInstallments: 10,
  //   priceInstallmentValue: 50.03,
  // }));

// Product.findAll({where: {birthday: {[Op.lte]: new Date() }}}).then( users => console.log(users.map(u => u.dataValues) ) );
// Product.destroy({where: {username: 'Ju'}}); //.then( users =>  );

Product.hasMany(ImgProduct)

module.exports = Product;