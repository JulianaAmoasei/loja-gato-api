const Model = require('sequelize').Model;

class PricesProduct extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        value: DataTypes.DECIMAL(10, 2),
        installments: DataTypes.INTEGER,
        installmentValue: DataTypes.DECIMAL(10, 2),
        productId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Products',
            key: 'id'
          }
        },
      },
      { sequelize, modelName: 'PricesProduct' }
    );
  }
}

module.exports = PricesProduct;