import React, { useEffect, useState } from 'react';
import s from './CategoryManagement.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories, deleteCategory, postCategory, getCategory } from '../../../actions/categoryAction';
import { formatName } from '../../../utils/helpers';

const CategoryManagement = () => {
  const categories = useSelector((state) => state.categories.categories.data);
  const category = useSelector((state) => state.categories.category)
  const [categoryName, setCategoryName] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch])

  const handleDeleteCategory = async (id) => {
    await dispatch(deleteCategory(id));
    dispatch(getCategories());
  }

  const handlePostCategory = async () => {
    const categoryExist = categories.find((el) => el.name.toLowerCase() === categoryName.toLowerCase().trim());
  
    if (categoryName.trim() === '') {
      setError('El nombre de categoría no puede estar vacío');
    } else if (categoryExist) {
      setError('La categoría ya existe');
    } else {
      await dispatch(postCategory({ name: categoryName.trim() }));
      setCategoryName('');
      setError('');
      dispatch(getCategories());
    }
  }

  const handleSelectCategory = async (id) => {
    await dispatch(getCategory(id));
  }

  return(
    <div className={s.container}>
      <h2>Administrar categorías</h2>
      <div className={s.categoryContainer}>
        <div className={s.catContainer}>
          <h3>Categorías</h3>
          <div className={s.divAddCat}>
            <input type="text" 
              placeholder='Nombre...' 
              value={categoryName} 
              onChange={(e) => setCategoryName(e.target.value)} 
            />
            <button className={s.btnAddCategory} onClick={() => handlePostCategory()}>+</button>
          </div>
          {error && <div className={s.errorAddCat}>{error}</div>}
          <div className={s.categoryList}>
            {
              categories && categories.map((el) => (
                <div className={s.divCategory} key={el.id}>
                  <button className={s.btnCategory} onClick={() => handleSelectCategory(el.id)}>{formatName(el.name)}</button>
                  <button className={s.btnDeleteCategory} onClick={() => handleDeleteCategory(el.id)}>X</button>
                </div>
              ))
            }
          </div>
        </div>
        {
          category && (
            <div className={s.subCatContainer}>
              <h3>{category.name}</h3>
              <div>
                <div>
                  <label>Nombre:</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Categoría padre:</label>
                  <select>
                    <option>Ninguna</option>
                    {
                      categories && categories.map((el) => (
                        <option>{el.name}</option>
                      ))
                    }
                  </select>
                  <button>Editar</button>
                </div>
              </div>
              <div>
                <h4>Subcategorías</h4>
              </div>
            </div>
          )
        }
        <div className={s.subSubCatContainer}>
          <h3>Sub-subcategorías</h3>
        </div>
      </div>
    </div>
  )
}


export default CategoryManagement;