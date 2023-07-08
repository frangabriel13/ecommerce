const { Router } = require("express");
const { Category } = require('../db');
const { getCategoryId, getCategories, updateCategory, deleteCategory } = require('../controllers/categoryController');

const router = Router();

router.get('/categories', async (req, res) => {
  try {
    const categories = await getCategories();
    res.status(200).json(categories);
  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: 'Error interno en el servidor' })
  }
})

router.get('/categories/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const category = await getCategoryId(id);
    if (!category) {
      return res.status(404).json({ message: "No se encontró la categoría" });
    }
    return res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener categoría mediante ID" });
  }
});

router.post("/categories", async (req, res) => {
  let { name, parentId } = req.body;

  try {
    let createCategory = await Category.create({
      name,
      parentId
    });
    res.status(201).json(createCategory);
  } catch(error) {
    console.log('Error al crear categoría', error);
    res.status(500).json({ message: "Error al crear categoría" });
  }
});

router.put("/categories/:id", updateCategory);

router.delete("/categories/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedCategory = await deleteCategory(id);
    deletedCategory
      ? res.status(200).json({ message: "Categoría eliminada con éxito" })
      : res.status(404).json({ message: "Categoría no encontrada" });
  } catch(error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar categoría" });
  }
});


module.exports = router;