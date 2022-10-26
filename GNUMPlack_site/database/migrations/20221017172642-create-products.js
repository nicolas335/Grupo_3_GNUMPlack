'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(600),
        allowNull: false
      },
      dimensions: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      discount:{
        type: Sequelize.INTEGER
      },
      price:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      qualities:{
        type: Sequelize.STRING(600)
      },
      advantages:{
        type: Sequelize.STRING(600)
      },
      image:{
        type: Sequelize.STRING(100)
      },
      stock:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      categories_products_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:'Categories_products'
          },
          key:'id'
        }
      },
      conditions_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:'Conditions'
          },
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};