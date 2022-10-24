'use strict';


let Categories_products = [
  {
    name: "Placa de yeso",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: 'Placa de yeso laminado',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: 'Placa de yeso con fibras',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: 'Placa de lana de madera',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: 'Placa de cemento',
    createdAt: new Date,
    updatedAt: new Date
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories_products', Categories_products , {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories_products', null, {});
  }
};
