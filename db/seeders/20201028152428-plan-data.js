'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Plans', [
        {ownerUserId: 1, 
          title: "John's awesome 5 mins work out", 
          categoryId:2, 
          price: 20, 
          description: "easy to follow and help you burn fat", 
          createdAt: new Date(),
        updatedAt: new Date() },
        {ownerUserId: 2, 
          title: "James' easy to follow crossfit", 
          categoryId:6, 
          price: 30, 
          description: "Grab a bottle of water and join me.", 
          createdAt: new Date(),
        updatedAt: new Date() },
        {ownerUserId: 3, 
          title: "Apple's fitness", 
          categoryId:1, 
          price: 40, 
          description: "Let's get some pumps today!", 
          createdAt: new Date(),
          updatedAt: new Date() },
          {ownerUserId: 5, 
            title: "Ryan's 6 packs shortcut", 
            categoryId:2, 
            price: 50, 
            description: "Finally launching my secret to 6 packs!", 
            createdAt: new Date(),
          updatedAt: new Date() },
      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Plans', null, {});
  
  }
};
