const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    discount: {
      type: DataTypes.FLOAT,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isVariable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  }, { timestamps: false })
}