'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    ownerUserId:{
      type:DataTypes.INTEGER ,
      allowNull: false,

    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryId: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Plan.associate = function(models) {
    // associations can be defined here
    Plan.belongsTo(models.User, {foreignKey: "ownerUserId"})

    const columnMapping ={
      through: "UserToPlan",
      otherKey: "userId",
      foreignKey:"planId"
    }

    Plan.belongsToMany(models.User, columnMapping)
    Plan.belongsTo(models.Category, {foreignKey: "categoryId"})
    Plan.hasMany(models.Exercise, {foreignKey:"planId"})
    Plan.hasMany(models.Image, { foreignKey: 'planId' })
    Plan.hasMany(models.Review, { foreignKey: 'planId' })
    Plan.hasMany(models.OrderItems, { foreignKey: 'planId' })


  
  };
  return Plan;
};