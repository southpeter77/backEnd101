'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('ExerciseToPlans', [
      {
        planId: 1,
        exerciseId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        planId: 1,
        exerciseId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        planId: 1,
        exerciseId: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },      
      
      {
        planId: 2,
        exerciseId: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        planId: 2,
        exerciseId: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        planId: 2,
        exerciseId: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        planId: 3,
        exerciseId: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        planId: 3,
        exerciseId: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        planId: 3,
        exerciseId: 31,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        planId: 4,
        exerciseId: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        planId: 4,
        exerciseId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        planId: 4,
        exerciseId: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        planId: 5,
        exerciseId: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        planId: 5,
        exerciseId: 36,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        planId: 5,
        exerciseId: 37,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        planId: 6,
        exerciseId: 38,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        planId: 6,
        exerciseId: 39,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        planId: 6,
        exerciseId: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        planId: 7,
        exerciseId: 41,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        planId: 7,
        exerciseId: 42,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        planId: 7,
        exerciseId: 43,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        planId: 8,
        exerciseId: 44,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        planId: 8,
        exerciseId: 45,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        planId: 8,
        exerciseId: 46,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        planId: 9,
        exerciseId: 47,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        planId: 9,
        exerciseId: 48,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        planId: 9,
        exerciseId: 49,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        planId: 10,
        exerciseId: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        planId: 10,
        exerciseId: 51,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        planId: 10,
        exerciseId: 52,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('ExerciseToPlans', null, {});
  }
};
