'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false
    },
    aboutMe: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trainer: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    started_training_year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    balance: DataTypes.INTEGER
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Plan, { foreignKey: "ownerUserId" })

    const columnMapping = {
      through: "UserToPlan",
      otherKey: "planId",
      foreignKey: "userId"
    }
    User.belongsToMany(models.Plan, columnMapping)

  };
  return User;
};