'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conditions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Conditions.hasMany(models.Products, {
        as: 'Products',
        foreignKey: 'conditions_id'
      })
      Conditions.hasMany(models.Removed_products, {
        as: 'Removed_products',
        foreignKey: 'conditions_id'
      })
    }
  }
  Conditions.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Conditions',
  });
  return Conditions;
};