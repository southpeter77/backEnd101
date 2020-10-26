'use strict';
module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
    title: {
      type:DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull:false
    },
    planId: {
      type:DataTypes.INTEGER,
       allowNull: false}
  }, {});
  Exercise.associate = function(models) {
    // associations can be defined here
    Exercise.belongsTo(models.Plan, {foreignKey: "planId"})
    Exercise.hasMany(models.Image, { foreignKey: 'exerciseId' })  
  };
  return Exercise;
};