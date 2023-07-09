const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, { timestamps: false })
}