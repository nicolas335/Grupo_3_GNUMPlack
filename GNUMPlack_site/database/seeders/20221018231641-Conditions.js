'use strict';

let Conditions = [
  {
    name: 'destacados',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: 'oferta',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: 'sin condicion',
    createdAt: new Date,
    updatedAt: new Date
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Conditions', Conditions , {});
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Conditions', null, {});
  }
};