'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.User,  { foreignKey: 'userId' })

    const columnMapping  = {
      through: "OrderItems",
      otherKey:"planId",
      foreignKey: "orderId"
    }

    Order.belongsToMany(models.Plan, columnMapping)
  };
  return Order;
};