const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('variation', {
    size: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
  }, { timestamps: false })
}