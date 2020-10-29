'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Exercises', [
        {
        title: "Angle Pull Up",
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Close Grip Shoulder Raise",
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Dumbbell Press",
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Farmer's Walk",
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Inner Chest",
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Jumping Jacks",
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Kick and One Leg Squat",
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "One Leg Extension",
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "One Leg Squat",
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Pull Up",
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Rear Delt",
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Shoulder Squat",
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Side Lunges",
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Single Leg Squate",
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Stand Up Cable Row",
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Stand Up Dumbbell Row",
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title:"Stand Up Row Extension",
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Steady Run", 
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Stand Up Shoulder Press",
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Stead Stand Up Shoulder Press",
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title:"Sumo Squat Bicep Curl",
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Get Some Break",
        description: "simple instruction",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Exercises', null, {});

  }
};
