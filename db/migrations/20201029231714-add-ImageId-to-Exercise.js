'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.addColumn('Exercises', "imageId", { type: Sequelize.INTEGER, references: {model: "Images"} },);

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.removeColumn('Exercises', "imageId");

  }
};
