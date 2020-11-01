'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      {
        email: 'johnSmith@gmail.com',
        aboutMe: "Hiy my name is John and I like to work out",
        hashedPassword: 'EiGG79H1o0UvbPrGV1gWjSSxOZlSLr',
        trainer: false,
        firstName: "John",
        lastName: "Smith",
        started_training_year: 2014,
        balance: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'JamesSmithy@gmail.com',
        aboutMe: "This app is so awesoem! I'm James BTW.",
        hashedPassword: 'EiGG79H1o0UvbPrGV1gWjSSxOZlSLr',
        trainer: false,
        firstName: "James",
        lastName: "smithy",
        started_training_year: 2019,
        balance: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'AdamApple@gmail.com',
        aboutMe: "Work out every day. Eat an apple everyday",
        hashedPassword: 'EiGG79H1o0UvbPrGV1gWjSSxOZlSLr',
        trainer: true,
        firstName: "Adamn",
        lastName: "Apple",
        started_training_year: 2020,
        balance: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'BRyan@gmail.com',
        aboutMe: "I will provide you the best work out plan.",
        hashedPassword: 'EiGG79H1o0UvbPrGV1gWjSSxOZlSLr',
        trainer: true,
        firstName: "Brian",
        lastName: "Ryan",
        started_training_year: 2001,
        balance: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'RYANryan@gmail.com',
        aboutMe: "Been training since 2017. Im so strong.",
        hashedPassword: 'EiGG79H1o0UvbPrGV1gWjSSxOZlSLr',
        trainer: false,
        firstName: "Ryan",
        lastName: "Ryan",
        started_training_year: 2017,
        balance: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'demo@demo.com',
        aboutMe: "Been training since 2017. Im so strong.",
        hashedPassword: bcrypt.hashSync("demo", 10),
        trainer: false,
        firstName: "Demo",
        lastName: "Demo",
        started_training_year: 2020,
        balance: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
       
  

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  }
};
