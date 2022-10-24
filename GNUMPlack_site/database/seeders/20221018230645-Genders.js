'use strict';

let Genders = [
  {
    name: 'N/C',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: 'male',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: 'female',
    createdAt: new Date,
    updatedAt: new Date
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Genders', Genders , {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Genders', null, {});
  }
};
