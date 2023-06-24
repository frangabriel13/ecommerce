const { Product } = require('../db');

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
}