const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, { timestamps: false })
}