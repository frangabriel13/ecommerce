const { Product } = require('../db');
const { Op } = require("sequelize");

const getProduct = async (req, res) => {
  try {
    const { name } = req.query;
    let products;

    if(name) {
      products = await Product.findAll({
        where: {
          [Op.or]: [
            { name: { [Op.iLike]: `%${name}%` } },
            { name: { [Op.iLike]: `%${name.split(" ").join("%")}%` } }
          ]
        }
      });
    } else {
      products = await Product.findAll();
    }
    
    return products;
  } catch(error) {
    console.error(error);
  }
};

const getProductById = async (id) => {
  try {
    const product = await Product.findByPk(id);
    return product;
  } catch(error) {
    console.error(error);
  }
};


module.exports = {
  getProductById,
  getProduct,
}