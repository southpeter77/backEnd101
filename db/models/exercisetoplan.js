'use strict';
module.exports = (sequelize, DataTypes) => {
  const ExerciseToPlan = sequelize.define('ExerciseToPlan', {
    planId: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    exerciseId: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  ExerciseToPlan.associate = function(models) {
    // associations can be defined here
  };
  return ExerciseToPlan;
};