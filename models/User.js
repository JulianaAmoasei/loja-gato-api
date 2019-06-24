const Model = require('sequelize').Model;

class User extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        }
      },
      { sequelize, modelName: 'User' }
    );
  }
}

module.exports = User;