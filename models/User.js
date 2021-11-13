const { Sequelize, DataTypes } = require("sequelize");
const db = require("./index");

const User = db.sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
