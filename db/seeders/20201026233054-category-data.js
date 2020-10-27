'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        categoryName: 'bodybuilding',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName: 'weight-loss',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName: 'cardio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName: 'stretching',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName: 'yoga',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName: 'crossfit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Categories', null, {});

  }
};
