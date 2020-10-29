'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Plans', [
        {ownerUserId: 1, 
          title: "Peter Kang's 6 packs short cut", 
          categoryId:2, 
          price: 20, 
          description: "easy to follow and help you burn fat", 
          createdAt: new Date(),
        updatedAt: new Date() },
        {ownerUserId: 1, 
          title: "Peter Kang's 8 packs short cut", 
          categoryId:2, 
          price: 30, 
          description: "easy to follow and help you burn fat", 
          createdAt: new Date(),
        updatedAt: new Date() },
        {ownerUserId: 1, 
          title: "Peter kang's 10 packs short cut", 
          categoryId:2, 
          price: 40, 
          description: "easy to follow and help you burn fat", 
          createdAt: new Date(),
          updatedAt: new Date() },
          {ownerUserId: 1, 
            title: "Peter Kang's 12 packs short cut", 
            categoryId:2, 
            price: 50, 
            description: "easy to follow and help you burn fat", 
            createdAt: new Date(),
          updatedAt: new Date() },
      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Plans', null, {});
  
  }
};
