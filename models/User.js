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

// sequelize.sync()
  // .then(() => User.create({
  //   email: 'ju@ju.com',
  //   password: '123'
  // }));

module.exports = User;