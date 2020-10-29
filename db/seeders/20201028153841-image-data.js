'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Images', [
        {
       url: "../../image/simple1.png",
       planId:1,
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        url: "../../image/simple2.png",
        planId:2,
        createdAt: new Date(),
        updatedAt: new Date()
       },   {
        url: "../../image/simple3.png",
        planId:3,
        createdAt: new Date(),
        updatedAt: new Date()
       },   {
        url: "../../image/simple4.png",
        planId:4,
        createdAt: new Date(),
        updatedAt: new Date()
       },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Images', null, {});

  }
};
