'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItems = sequelize.define('OrderItems', {
    orderId: DataTypes.INTEGER,
    planId: DataTypes.INTEGER
  }, {});
  OrderItems.associate = function(models) {
    // associations can be defined here
    // OrderItems.belongsTo(models.Plan, {foreignKey: "planId"})
    // OrderItems.belongsTo(models.Order, {foreignKey: "orderId"})


  };
  return OrderItems;
};