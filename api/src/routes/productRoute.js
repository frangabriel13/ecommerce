const { Router } = require("express");
const { Product } = require('../db');
const { getProductById } = require('../controllers/productController');

const router = Router();

router.get('/products', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch(error) {
    console.log('Error al obtener los productos', error);
    res.status(500).json({ message: 'Error al obtener los productos' });
  }
});

router.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProductById(id);
    if (!product) {
      return res.status(404).json({ message: "No se encontró el producto" });
    }
    return res.status(200).json(product);
  } catch(error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener producto mediante ID" });
  }
});

router.post("/products", async (req, res) => {
  let { name, description, price, discount, category, images, stock } = req.body;
  try {
    let createProduct = await Product.create({
      name,
      description,
      price,
      discount,
      category,
      images,
      stock
    });
    res.status(201).json(createProduct);
  } catch(error) {
    console.log('Error al crear producto', error);
    res.status(500).json({ message: "Error al crear producto" });
  }
});


module.exports = router;