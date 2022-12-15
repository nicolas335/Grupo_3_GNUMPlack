'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Carts.belongsTo(models.Users,{
        as:'user',
        foreignKey:'users_id'
      })
      Carts.belongsTo(models.Products,{
        as:'product',
        foreignKey:'products_id'
      })
      Carts.belongsTo(models.Orders,{
        as:'order',
        foreignKey:'orders_id'
      })
    }
  }
  Carts.init({
    users_id: DataTypes.INTEGER,
    products_id: DataTypes.INTEGER,
    orders_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carts',
    timestamps: true
  });
  return Carts;
};