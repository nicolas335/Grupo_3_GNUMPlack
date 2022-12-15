'use strict';
const {
   Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.belongsTo(models.Genders, {
        as: 'gender',
        foreignKey: 'genders_id'
      })
      Users.belongsTo(models.Categories_Users, {
        as: 'categoryUser',
        foreignKey: 'categories_users_id'
      })
      Users.hasMany(models.Carts,{
        as:'user',
        foreignKey:'users_id'
      })
    }
  }
  Users.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    city: DataTypes.STRING,
    image: DataTypes.STRING,
    genders_id: DataTypes.INTEGER,
    categories_users_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
    timestamps: true
  });
  return Users;
};