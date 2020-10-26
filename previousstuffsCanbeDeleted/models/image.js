'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    url: {
      type: DataTypes.STRING,
      allowNull:false
    },
    userId: DataTypes.INTEGER,
    planId: DataTypes.INTEGER,
    exerciseId: DataTypes.INTEGER
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.User, {foreignKey:"userId"})
    Image.belongsTo(models.Plan, {foreignKey:"planId"})
    Image.belongsTo(models.Exercise, {foreignKey:"exerciseId"})

  };
  return Image;
};