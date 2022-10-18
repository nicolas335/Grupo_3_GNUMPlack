'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init({
    users_id: DataTypes.INTEGER,
    carts_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orders',
    timestamps: true
  });
  return Orders;
};