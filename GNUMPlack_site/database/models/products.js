'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.belongsTo(models.Categories_products, {
        as: 'categoryProduct',
        foreignKey: 'categories_products_id'
      })
      Products.belongsTo(models.Conditions, {
        as: 'condition',
        foreignKey: 'conditions_id'
      })
    }
  }
  Products.init({
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
    modelName: 'Products',
    timestamps: true
  });
  return Products;
};