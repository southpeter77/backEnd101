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
    Order.hasMany(models.OrderItems, { foreignKey: 'orderId' })
  };
  return Order;
};