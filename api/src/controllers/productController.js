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

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, discount, category, images, stock } = req.body;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.discount = discount !== undefined ? discount : product.discount;
    product.category = category || product.category;
    product.images = images !== undefined ? images : product.images;
    product.stock = stock || product.stock;
    await product.save();

    res.status(200).json({ message: "Producto actualizado con éxito" });
  } catch(error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar usuario" });
  }
};

const deleteProduct = async (id) => {
  try {
    const deletedProduct = await Product.destroy({ where: { id: id } });
    return deletedProduct;
  } catch(error) {
    console.log(error);
  }
};


module.exports = {
  getProductById,
  getProduct,
  updateProduct,
  deleteProduct
}