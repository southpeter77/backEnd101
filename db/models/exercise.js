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
    imageId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {model:"Images"}
      }
    
    // planId: {
    //   type:DataTypes.INTEGER,
    //    allowNull: false}
  }, {});
  Exercise.associate = function(models) {
    Exercise.belongsTo(models.Image, {foreignKey:"imageId"})

    // associations can be defined here
    // Exercise.belongsTo(models.Plan, {foreignKey: "planId"})
    Exercise.hasMany(models.Image, { foreignKey: 'exerciseId' })  
const columnMapping ={
  through: "ExerciseToPlan",
  otherKey:"planId",
  foreignKey:"exerciseId"
}
Exercise.belongsToMany(models.Plan, columnMapping)

  };
  return Exercise;
};