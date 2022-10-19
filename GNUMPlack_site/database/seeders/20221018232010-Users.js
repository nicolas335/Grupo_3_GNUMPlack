'use strict';

let Users = [
  {
    first_name: "Orbadiah",
    last_name: "Claesens",
    email: "oclaesens0@amazon.de",
    password: "EZb2wrx59",
    phoneNumber: "8243966606",
    city: "Yanglang",
    genders_id: 2,
    categories_users_id: 1,
    image: "default-user-img.png",
    createdAt: new Date,
    updatedAt: new Date
}
]

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', Users, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};