const { Router } = require("express");
const { Category } = require('../db');
const { Op } = require("sequelize");
const { getCategoryId, getCategories, updateCategory, deleteCategory } = require('../controllers/categoryController');

const router = Router();

// router.get('/categories', async (req, res) => {
//   try {
//     const categories = await getCategories();
//     res.status(200).json(categories);
//   } catch(error) {
//     console.log(error);
//     return res.status(500).json({ message: 'Error interno en el servidor' })
//   }
// })

// router.get('/categories', async (req, res) => {
//   try {
//     const categories = await Category.findAll();
//     res.status(200).json(categories);
//   } catch(error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error al obtener las categorías' });
//   }
// });

router.get('/categories', async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      const categories = await Category.findAll();
      return res.status(200).json(categories);
    }

    const categories = await Category.findAll({
      where: {
        name: {
          [Op.or]: [
            { [Op.iLike]: `${name}%` },
            { [Op.iLike]: `% ${name}%` }
          ]
        }
      }
    });

    if (categories.length === 0) {
      return res.status(404).json({ error: 'No se encontraron categorías con ese nombre.' });
    }

    res.status(200).json(categories);
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las categorías' });
  }
});

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
  let { name, parentId, order } = req.body;

  try {
    let createCategory = await Category.create({
      name,
      parentId,
      order
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