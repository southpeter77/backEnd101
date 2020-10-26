'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    categoryName: {type: DataTypes.STRING, allowNull: false, unique:true},
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.Plan, {foreignKey: "categoryId"})
  };
  return Category;
};