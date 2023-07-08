const { Category } = require('../db');

const getCategories = async (parentId = null) => {
  const categories = await Category.findAll({
    where: { parentId },
    include: {
      model: Category,
      as: 'subcategories',
      include: {
        model: Category,
        as: 'subcategories',
      },
    }
  })
  return categories;
}

const getCategoryId = async (id) => {
  try {
    const category = await Category.findByPk(id);
    return category;
  } catch (error) {
    console.error(error);
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, parentId } = req.body;
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }

    category.name = name || category.name;
    category.parentId = parentId !== undefined ? parentId : category.parentId;
    await category.save();

    res.status(200).json({ message: "Categoría actualizada con éxito" });
  } catch(error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar categoría" });
  }
};

const deleteCategory = async (id) => {
  try {
    const deletedCategory = await Category.destroy({ where: { id: id } });
    return deletedCategory;
  } catch(error) {
    console.log(error);
  }
};


module.exports = {
  getCategoryId,
  getCategories,
  updateCategory,
  deleteCategory
}