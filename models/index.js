'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require('../config/database');

const sequelize = new Sequelize(config.database, config.username, config.password, config);
const db = { sequelize };

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file));
    db[model.name] = model.init(sequelize, Sequelize);
  });

Object.values(db)
  .filter(model => typeof model.associate === "function")
  .forEach(model => model.associate(db));

module.exports = db;
