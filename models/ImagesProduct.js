const Model = require('sequelize').Model;

class ImgProduct extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        order: DataTypes.INTEGER,
        productId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Products',
            key: 'id'
          }
        },
        path: DataTypes.STRING,
      },
      { sequelize, modelName: 'ImgProduct' }
    );
  }
}

// ImgProduct.init({
//   order: Sequelize.INTEGER,
//   productId: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//     references: {
//       model: 'Products',
//       key: 'id'
//     }
//   },
//   path: Sequelize.STRING,
// }, { sequelize, modelName: 'ImgProduct' })

// sequelize.sync()
  // .then(() => ImgProduct.create({
  //   order: 1,
  //   productId: 3,
  //   path: 'https://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb_600x600-PU98460_1.jpg'
  // }));

module.exports = ImgProduct;