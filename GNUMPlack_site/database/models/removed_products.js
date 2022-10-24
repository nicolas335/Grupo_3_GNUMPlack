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
      Removed_products.belongsTo(models.Categories_products, {
        as: 'categoryProduct',
        foreignKey: 'categories_products_id'
      })
      Removed_products.belongsTo(models.Conditions, {
        as: 'condition',
        foreignKey: 'conditions_id'
      })
    }
  }
  Removed_products.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    dimensions: DataTypes.STRING,
    discount: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    qualities: DataTypes.STRING,
    advantages: DataTypes.STRING,
    image: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    categories_products_id: DataTypes.INTEGER,
    conditions_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Removed_products',
    timestamps: true
  });
  return Removed_products;
};