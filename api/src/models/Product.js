const { DataTypes } = require("sequelize");
const { uploadToCloudinary } = require('../utils/cloudinary');

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
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // images: {
    //   type: DataTypes.ARRAY(DataTypes.STRING),
    // },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, { timestamps: false })
}