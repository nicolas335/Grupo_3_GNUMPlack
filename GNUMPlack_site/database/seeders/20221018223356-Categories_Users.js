'use strict';

let Categories_Users = [
  {
    name: 'user',
    createdAt: new Date,
    updatedAt: new Date,
  },
  {
    name: 'admin',
    createdAt: new Date,
    updatedAt: new Date
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories_Users', Categories_Users, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories_Users', null, {});
  }
};
