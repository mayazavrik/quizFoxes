'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
 
    await queryInterface.bulkInsert('Users', [{
     name: 'TestUser',
     score: 0,
     createdAt: new Date(),
     updatedAt: new Date(),
     }], {});
    
  },

  async down (queryInterface) {

     await queryInterface.bulkDelete('Users', null, {});
     
  }
};
