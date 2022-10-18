'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories_products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /* Categories_products.hasMany(models.Products, {
        as: 'productsCategories',
        foreignKey: 'categories_products_id'
      }) */
    }
  }
  Categories_products.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categories_products',
  });
  return Categories_products;
};