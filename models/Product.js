const Model = require('sequelize').Model;

const ImgProduct = require('../models/ImagesProduct');
const PricesProduct = require('../models/PricesProduct');
class Product extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING,
        }
      },
      { sequelize, modelName: 'Product' }
    );
  }
  static associate() {
    this.myAssociation = this.hasMany(ImgProduct, {
      as: 'imagens_produto',
      foreignKey: 'productId'
    });

    this.myAssociation = this.hasOne(PricesProduct, {
      as: 'precos_produto',
      foreignKey: 'productId'
    })

  }
}

module.exports = Product;