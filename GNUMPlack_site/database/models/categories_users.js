'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories_Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Categories_Users.hasMany(models.Users, {
        as: 'inscripted',
        foreignKey: 'categories_users_id'
      })
    }
  }
  Categories_Users.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categories_Users',
  });
  return Categories_Users;
};