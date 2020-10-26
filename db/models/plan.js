'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    ownerUserId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Plan.associate = function(models) {
    // associations can be defined here
  };
  return Plan;
};