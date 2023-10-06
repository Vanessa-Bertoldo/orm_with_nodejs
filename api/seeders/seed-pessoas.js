'use strict';

/** @type {import('sequelize-cli').Migration} 
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Pessoas', [{
        nome: 'ana teste',
        ativo: true,
        email: "ana@ana",
        role: "estudante",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nome: 'valdemir teste',
        ativo: false,
        email: "valdemir@valdemir",
        role: "estudante",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nome: 'paula teste',
        ativo: false,
        email: "paula@paula",
        role: "docente",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Pessoas', null, {});
    
  }
};*/
