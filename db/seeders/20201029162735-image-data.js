'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Images', [
{
  url:"./images/anglePullUp.gif",
  exerciseId:1,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/closeGripRaise.gif",
  exerciseId:2,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/dumbbelPress.gif",
  exerciseId:3,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/farmersWalk.gif",
  exerciseId:4,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/innerChest.gif",
  exerciseId:5,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/jumpingJacks.gif",
  exerciseId:6,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/kickOneLegSquat.gif",
  exerciseId:7,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/oneLegExtension.gif",
  exerciseId:8,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/oneLegSquat.gif",
  exerciseId:9,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/pullUps.gif",
  exerciseId:10,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/rearDelt.gif",
  exerciseId:11,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/shoulderSquat.gif",
  exerciseId:12,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/sideLunges.gif",
  exerciseId:13,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/anglesingleLegSquatullUp.gif",
  exerciseId:14,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/standUpCableRow.gif",
  exerciseId:15,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/standUpDumbbellRow.gif",
  exerciseId:16,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/standUpRowExtension.gif",
  exerciseId:17,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/standUpRun.gif",
  exerciseId:18,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/standUpShoulderPress.gif",
  exerciseId:19,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/steadyStandUpshoulderPress.gif",
  exerciseId:20,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/sumoSquatBicepCurl.gif",
  exerciseId:21,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/getSomeWater.gif",
  exerciseId:22,
  createdAt: new Date(),
  updatedAt: new Date()
  
},

      ], {});
   
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Images', null, {});

  }
};
