const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://bnwztuyofhjpit:cf62643bdabb3b91b8c2debba198b90cc016534b0255d90e1bf7c37669e22e6f@ec2-174-129-242-183.compute-1.amazonaws.com:5432/d9hodvne5eks0l',
  {dialect:"postgres", protocol: "postgres", dialectOptions: { ssl: true}});
const Op = Sequelize.Op

class User extends Sequelize.Model {}

User.init({
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
  type: Sequelize.STRING,
  allowNull: false,
  },
}, { sequelize, modelName: 'User' })

sequelize.sync()
  .then(() => User.create({
    email: 'ju@ju.com',
    password: '123'
  }));

module.exports = User;