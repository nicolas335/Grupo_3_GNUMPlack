'use strict';

let productsJson = require('../../data/products.json');

let categories_products = ["Placa de yeso", "Placa de yeso laminado", "Placa de yeso con fibras", "Placa de lana de madera", "Placa de cemento"];

let conditionId = ["destacado", "oferta", "sin condicion"]

let ids = (param, array) => {
  let result = array.findIndex(element => element === param)
  return result + 1
};

let Removed_products = {
  name: 'LIGHTBOARD HORIZON B',
  description: 'Placa de yeso laminado muy ligera con 4 bordes afinados desarrollada para techos suspendidos continuos.',
  dimensions: '1.5mts x 2mts',
  discount: 8,
  price: 1999,
  qualities: 'La placa GNUMPlack Lightboard Horizon es una placa de yeso laminado muy ligera con 4 bordes afinados 4BA desarrollada para techos suspendidos continuos.,Especialmente diseñada para facilitar el tratamiento de juntas en ambos sentidos, logrando una superficie plana y lista para alcanzar altas exigencias de acabado.',
  advantages: 'Para uso interior.,Más respetuoso con el medio ambiente.,Sistema ligero.,No combustible.,Ideales para habitaciones en residencial de obra nueva y reforma.',
  image: 'Ligthboard-Horizon-B.png',
  stock: 8,
  categories_products_id: 2,
  conditions_id: 3,
  createdAt: new Date,
  updatedAt: new Date
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Removed_products', Removed_products, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Removed_products', null, {});
  }
};