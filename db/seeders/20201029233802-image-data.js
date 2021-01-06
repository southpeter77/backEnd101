'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Images', [
{
  url:"./images/anglePullUp.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/closeGripRaise.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/dumbbelPress.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/farmersWalk.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/innerChest.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/jumpingJacks.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/kickOneLegSquat.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/oneLegExtension.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/oneLegSquat.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/pullUps.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/rearDelt.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/shoulderSquat.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/sideLunges.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/anglesingleLegSquatullUp.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/standUpCableRow.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/standUpDumbbellRow.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/standUpRowExtension.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/standUpRun.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/standUpShoulderPress.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/steadyStandUpshoulderPress.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/sumoSquatBicepCurl.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"./images/getSomeWater.gif",
  createdAt: new Date(),
  updatedAt: new Date()
  
},
{
  url:"https://athlete101image.s3.amazonaws.com/1604299898636images.png",
  userId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
  
},
{
  url:"https://athlete101image.s3.amazonaws.com/1604300020652download%20%282%29.jpeg",
  userId: 2,
  createdAt: new Date(),
  updatedAt: new Date()
  
},
{
  url:"https://athlete101image.s3.amazonaws.com/1604299714971png-transparent-apple-fruit-animation-drawing-cartoon-lectures.png",
  userId: 3,
  createdAt: new Date(),
  updatedAt: new Date()
  
},
{
  url:"https://athlete101image.s3.amazonaws.com/1604335984083muscle-man-vector-889202.jpg",
  userId: 4,
  createdAt: new Date(),
  updatedAt: new Date()
  
},
{
  url:"https://athlete101image.s3.amazonaws.com/1604336287257download%20%284%29.jpeg",
  userId: 5,
  createdAt: new Date(),
  updatedAt: new Date()
  
},{
  url:"defaultProfile",
  userId: 6,
  createdAt: new Date(),
  updatedAt: new Date()
  
},

      ], {});
   
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Images', null, {});

  }
};
