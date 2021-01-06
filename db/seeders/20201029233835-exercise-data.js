
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



      //1
      //23, 24, 25
      {
        title: "One Leg Squat",
        description: "one leg squat 20 reps 3 sets!",
        imageId:9,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: "Stand Up Shoulder Press",
        description: "stand up and work your shoulders. 10 reps 4 sets",
        imageId:19,
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        title: "Steady Run", 
        description: "keep it going!!!",
        imageId:18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //2 
      //26, 27, 28
      {
        title: "Side Lunges",
        description: "Lunges!!!!!!",
        imageId:13,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Single Leg Squat",
        description: "squat with one leg!",
        imageId:14,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Stand Up Cable Row",
        description: "Row Row Row your back",
        imageId:15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //3
      //29, 30, 31
      {
        title: "Farmer's Walk",
        description: "Walk like Farmers!",
        imageId:4,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Inner Chest",
        description: "Burn the fat!",
        imageId:5,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Jumping Jacks",
        description: "Lets go jumping jacks!",
        imageId:6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //4
      //32,33,34
      {
        title: "Angle Pull Up",
        description: "PUll ups!",
        imageId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Close Grip Shoulder Raise",
        description: "20 reps 4 sets!",
        imageId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Dumbbell Press",
        description: "Don't go too heavy with this!",
        imageId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      //5
      //35,36,37
      {
        title: "One Leg Squat",
        description: "one leg squat 20 reps 3 sets!",
        imageId:9,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: "Stand Up Shoulder Press",
        description: "stand up and work your shoulders. 10 reps 4 sets",
        imageId:19,
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        title: "Steady Run", 
        description: "keep it going!!!",
        imageId:18,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      //6
      //38, 39, 40
      {
        title: "Farmer's Walk",
        description: "Walk like Farmers!",
        imageId:4,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Inner Chest",
        description: "Burn the fat!",
        imageId:5,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Jumping Jacks",
        description: "Lets go jumping jacks!",
        imageId:6,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      //7
      //41,42,43
      {
        title: "Farmer's Walk",
        description: "Walk like Farmers!",
        imageId:4,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Inner Chest",
        description: "Burn the fat!",
        imageId:5,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Jumping Jacks",
        description: "Lets go jumping jacks!",
        imageId:6,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      //8
      //44, 45,46
      {
        title: "Angle Pull Up",
        description: "PUll ups!",
        imageId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Close Grip Shoulder Raise",
        description: "20 reps 4 sets!",
        imageId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Dumbbell Press",
        description: "Don't go too heavy with this!",
        imageId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      //9
      //47, 48, 49
      {
        title: "One Leg Squat",
        description: "one leg squat 20 reps 3 sets!",
        imageId:9,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: "Stand Up Shoulder Press",
        description: "stand up and work your shoulders. 10 reps 4 sets",
        imageId:19,
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        title: "Steady Run", 
        description: "keep it going!!!",
        imageId:18,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      //10
      //50, 51, 52
      {
        title: "Side Lunges",
        description: "Lunges!!!!!!",
        imageId:13,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Single Leg Squat",
        description: "squat with one leg!",
        imageId:14,
        createdAt: new Date(),
        updatedAt: new Date()
      },     {
        title: "Stand Up Cable Row",
        description: "Row Row Row your back",
        imageId:15,
        createdAt: new Date(),
        updatedAt: new Date()
      },


    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Exercises', null, {});

  }
};