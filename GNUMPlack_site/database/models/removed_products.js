'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Removed_products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Removed_products.init({
    categories_products_id: DataTypes.INTEGER,
    conditions_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Removed_products',
  });
  return Removed_products;
};