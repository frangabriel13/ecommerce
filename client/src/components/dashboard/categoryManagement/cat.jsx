import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories, postCategory, deleteCategory, getCategory } from "../../../actions/categoryAction";
import s from './CategoryManagement.module.css';

function Cat() {
  const categories = useSelector((state) => state.categories.categories.data);
  const category = useSelector((state) => state.categories.category.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleAddCategory = async () => {
    const categoryName = document.getElementById("categoryName").value.trim();

    if (categoryName === "") {
      alert('El nombre de categoría no puede estar vacío');
      return;
    }

    const sortedCategories = [...categories].sort((a, b) => b.order - a.order);
    const lastOrder = sortedCategories.length > 0 ? sortedCategories[0].order : 0;

    const payload = {
      name: categoryName.toLowerCase(),
      order: lastOrder + 1
    };
  
    try {
      const response = await dispatch(postCategory(payload));
      dispatch(getCategories());
      document.getElementById("categoryName").value = "";
    } catch (error) {
      if (error.response && error.response.status === 500) {
        alert('Categoría ya existente')
      } else {
        console.log(error)
      }
    }
  };

  const handleDeleteCategory = async (id) => {
    await dispatch(deleteCategory(id));
    dispatch(getCategories());
  }

  const handleCategory = async (id) => {
    try {
      await dispatch(getCategory(id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.container}>
      <h2>Categorías</h2>
      <div className={s.categoryContainer}>

        <div className={s.categories}>
          <div className={s.search}>
            <input id="categoryName" type="text" placeholder="Nombre..." />
            <button onClick={(e) => handleAddCategory(e)}>Agregar</button>
          </div>
          <div className={s.categoryList}>
            <div className={s.level1}>
              {categories && categories.map(category => (
                <div key={category.id}>
                  <button className={s.categoryName} onClick={() => handleCategory(category.id)}>{category.name}</button>
                  <button className={s.deleteButton} onClick={() => handleDeleteCategory(category.id)}>X</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={s.category}>
          <h3>Pantalones</h3>
          <div className={s.categoryInfo}>
            <label>
              Nombre:
              <input type="text" />
            </label>
            <label>
              Categoría padre:
              <select>
              </select>
            </label>
          </div>
          <div className={s.subcategories}>
            <h4>Subcategorías:</h4>
          </div>
          <button>Eliminar categoría</button>
          <button>Guardar cambios</button>
        </div>
      </div>
      <button>Cancelar</button>
      <button>Guardar cambios</button>

      </div>
  );
}


export default Cat;