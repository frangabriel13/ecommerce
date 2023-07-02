const { Router } = require("express");
const { Product } = require('../db');
const cloudinary = require('../utils/cloudinary');
const { getProductById, getProduct, updateProduct, deleteProduct } = require('../controllers/productController');

const router = Router();

router.get("/products", async (req, res) => {
  try {
    const product = await getProduct(req);
    res.status(200).json(product);
  } catch(error) {
    res.status(500).json({ message: 'Error al buscar producto' })
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
    const uploadedImages = await Promise.all(images.map((image) => cloudinary.uploader.upload(image)));
    const imageUrls = uploadedImages.map((image) => image.secure_url);
    
    let createProduct = await Product.create({
      name,
      description,
      price,
      discount,
      category,
      images: imageUrls,
      stock
    });
    res.status(201).json(createProduct);
  } catch(error) {
    console.log('Error al crear producto', error);
    res.status(500).json({ message: "Error al crear producto" });
  }
});

router.put("/products/:id", updateProduct);

router.delete("/products/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedProduct = await deleteProduct(id);
    deletedProduct
      ? res.status(200).json({ message: "Producto eliminado con éxito" })
      : res.status(404).json({ message: "Producto no encontrado" });
  } catch(error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar producto" });
  }
});


module.exports = router;