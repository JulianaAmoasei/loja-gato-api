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

module.exports = ImgProduct;