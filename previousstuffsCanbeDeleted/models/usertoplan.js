'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserToPlan = sequelize.define('UserToPlan', {
    userId: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    planId: {
      type:DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  UserToPlan.associate = function(models) {
    // associations can be defined here
  };
  return UserToPlan;
};