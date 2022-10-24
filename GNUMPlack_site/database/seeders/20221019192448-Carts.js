'use strict';

let Carts = [
  {
    users_id:1,
    products_id: 1,
    amount:null,
    totalPrice:null,
    createdAt: new Date,
    updatedAt: new Date
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Carts', Carts, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Carts', null, {});
  }
};
