'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      {
        email: 'johnSmith@gmail.com',
        aboutMe: "this is some info about john smith",
        hashedPassword: 'EiGG79H1o0UvbPrGV1gWjSSxOZlSLr',
        trainer: false,
        firstName: "John",
        lastName: "Smith",
        started_training_year: 2015,
        balance: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'marqeee@gmail.com',
        aboutMe: "this is some info about marqeee",
        hashedPassword: 'EiGG79H1o0UvbPrGV1gWjSSxOZlSLr',
        trainer: false,
        firstName: "marq",
        lastName: "qqq",
        started_training_year: 2019,
        balance: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'Yunnaaa@gmail.com',
        aboutMe: "this is some info about jyeaaaaa",
        hashedPassword: 'EiGG79H1o0UvbPrGV1gWjSSxOZlSLr',
        trainer: true,
        firstName: "yunna",
        lastName: "na",
        started_training_year: 2020,
        balance: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'TaeTaeTae@gmail.com',
        aboutMe: "this is some info about me and wow",
        hashedPassword: 'EiGG79H1o0UvbPrGV1gWjSSxOZlSLr',
        trainer: true,
        firstName: "tae",
        lastName: "taetttae",
        started_training_year: 2001,
        balance: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'holulululu@gmail.com',
        aboutMe: "this is some info about holulu",
        hashedPassword: 'EiGG79H1o0UvbPrGV1gWjSSxOZlSLr',
        trainer: false,
        firstName: "huluoo",
        lastName: "aloha",
        started_training_year: 2017,
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
