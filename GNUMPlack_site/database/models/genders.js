'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /* Genders.hasMany(models.Users, {
        as: 'users',
        foreignKey: 'genders_id'
      }) */
    }
  }
  Genders.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Genders',
  });
  return Genders;
};