
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Exercises', [
        {
        title: "Angle Pull Up",
        description: "simple instruction",
        imageId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Close Grip Shoulder Raise",
        description: "simple instruction",
        imageId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Dumbbell Press",
        description: "simple instruction",
        imageId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Farmer's Walk",
        description: "simple instruction",
        imageId:4,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Inner Chest",
        description: "simple instruction",
        imageId:5,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Jumping Jacks",
        description: "simple instruction",
        imageId:6,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Kick and One Leg Squat",
        description: "simple instruction",
        imageId:7,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "One Leg Extension",
        description: "simple instruction",
        imageId:8,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "One Leg Squat",
        description: "simple instruction",
        imageId:9,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Pull Up",
        description: "simple instruction",
        imageId:10,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Rear Delt",
        description: "simple instruction",
        imageId:11,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Shoulder Squat",
        description: "simple instruction",
        imageId:12,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Side Lunges",
        description: "simple instruction",
        imageId:13,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Single Leg Squate",
        description: "simple instruction",
        imageId:14,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Stand Up Cable Row",
        description: "simple instruction",
        imageId:15,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Stand Up Dumbbell Row",
        description: "simple instruction",
        imageId:16,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title:"Stand Up Row Extension",
        description: "simple instruction",
        imageId:17,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Steady Run", 
        description: "simple instruction",
        imageId:18,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Stand Up Shoulder Press",
        description: "simple instruction",
        imageId:19,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Stead Stand Up Shoulder Press",
        description: "simple instruction",
        imageId:20,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title:"Sumo Squat Bicep Curl",
        description: "simple instruction",
        imageId:21,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Get Some Break",
        description: "simple instruction",
        imageId:22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Exercises', null, {});

  }
};