import React, { useEffect, useState } from 'react';
import s from './CategoryManagement.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories, deleteCategory, postCategory, filterCategories, putCategory } from '../../../actions/categoryAction';
import { formatName } from '../../../utils/helpers';

const CategoryManagement = () => {
  const categories = useSelector((state) => state.categories.categories);
  const allCategories = useSelector((state) => state.categories.allCategories);
  const [selectedTab, setSelectedTab] = useState('categories');
  const [categoryName, setCategoryName] = useState('');
  const [parentCategory, setParentCategory] = useState('');
  const [parentSelect, setParentSelect] = useState('');
  const [category, setCategory] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    if (tab === 'subcategories') {
      const firstCategory = allCategories.find((el) => el.parentId === null);
      if(firstCategory) {
        setParentSelect(firstCategory.id);
        dispatch(filterCategories(firstCategory.id));
      }
    }
  };

  const handlePostCategory = async () => {
    const categoryExist = categories.find((el) => el.name.toLowerCase() === categoryName.toLowerCase().trim());
  
    if (categoryName.trim() === '') {
      setError('El nombre de categoría no puede estar vacío');
    } else if (categoryExist) {
      setError('La categoría ya existe');
    } else {
      await dispatch(postCategory({ name: categoryName.trim(), parentId: parentCategory === "" ? null : parentCategory }));
      setCategoryName('');
      setParentCategory('');
      setError('');
      dispatch(getCategories());
      // dispatch(filterCategories(parentSelect));
    }
  }

  const handleDeleteCategory = async (id) => {
    await dispatch(deleteCategory(id));
    dispatch(getCategories());
  }

  const handleFilterCategories = (id) => {
    setParentSelect(id);
    dispatch(filterCategories(id));
  }

  const handleEditCategory = (id) => {
    const categoryToEdit = allCategories.find((el) => el.id === id);
    if(categoryToEdit) {
      setEditMode(true);
      setCategory(categoryToEdit);
      setCategoryName(categoryToEdit.name);
      setParentCategory(categoryToEdit.parentId || '');
    }
  }

  const handleSaveCategory = async () => {
    const categoryExist = allCategories.find((el) => el.name.toLowerCase() === categoryName.toLowerCase().trim());

    if (categoryName.trim() === '') {
      setError('El nombre de categoría no puede estar vacío');
    } else if (categoryExist && categoryExist.name.toLowerCase() !== category.name.toLowerCase()) {
      setError('La categoría ya existe');
    } else {
      await dispatch(putCategory({ id: category.id, name: categoryName.trim(), parentId: parentCategory === "" ? null : parentCategory }));
      setEditMode(false);
      setCategoryName('');
      setParentCategory('');
      setError('');
      dispatch(getCategories());
    }
  }

  const handleCancelEdit = () => {
    setEditMode(false);
    setCategoryName('');
    setParentCategory('');
    setError('');
  }

  return(
    <div className={s.container}>
      <h2>Administrar categorías</h2>
      <div className={s.divCategories}>
        <div className={s.divTable}>
          <ul className={s.categories}>
            <li 
              className={selectedTab === 'categories' ? 'active' : ''}
              onClick={() => handleTabChange('categories')}>
              Categorías
            </li>
            <li 
              className={selectedTab === 'subcategories' ? 'active' : ''}
              onClick={() => handleTabChange('subcategories')}>
              Subcategorías
            </li>
            {/* <li 
              className={selectedTab === 'sub-subcategories' ? 'active' : ''}
              onClick={() => handleTabChange('sub-subcategories')}>
              Sub-subcategorías
            </li> */}
          </ul>
          {
            selectedTab === 'categories' && (
              <div className={s.listCategories}>
                <table className={s.table}>
                  <thead>
                    <tr>
                      <th>N</th>
                      <th className={s.nameHeader}>Nombre</th>
                    </tr> 
                  </thead>
                  <tbody>
                    {
                      allCategories && allCategories.map((el, index) => (
                        el.parentId === null && (
                          <tr key={el.id}>
                            <td>{index + 1}</td>
                            <td style={{ textAlign: 'left' }}>{formatName(el.name)}</td>
                            <td className={s.btnsCategory} style={{ textAlign: 'right' }}>
                              <button onClick={() => handleEditCategory(el.id)}>Editar</button>
                              <button onClick={() => handleDeleteCategory(el.id)}>Eliminar</button>
                            </td>
                          </tr>
                        )
                      ))
                    }
                  </tbody> 
                </table>
              </div> 
            )
          }
          {
            selectedTab === 'subcategories' && (
              <div className={s.listCategories}>
                <select onChange={(e) => handleFilterCategories(e.target.value)}>
                  {
                    allCategories && allCategories.filter((el) => el.parentId === null).map((el) => (
                      <option value={el.id} key={el.id}>{el.name}</option>
                    ))
                  }
                </select>
                <table className={s.table}>
                  <thead>
                    <tr>
                      <th>N</th>
                      <th className={s.nameHeader}>Nombre</th>
                    </tr> 
                  </thead>
                  <tbody>
                    {
                      categories && categories.map((el, index) => ( 
                        <tr key={el.id}>
                          <td>{index + 1}</td>
                          <td style={{ textAlign: 'left' }}>{formatName(el.name)}</td>
                          <td className={s.btnsCategory} style={{ textAlign: 'right' }}>
                            <button onClick={() => handleEditCategory(el.id)}>Editar</button>
                            <button onClick={() => handleDeleteCategory(el.id)}>Eliminar</button>
                          </td>
                        </tr>                        
                      ))
                    }
                  </tbody> 
                </table>
              </div> 
            )
          }                            
        </div>
        {
          editMode ? (
            <div className={s.divForm}>
              <h3>Editar categoría</h3>
              <div className={s.form}>
                <div className={s.nameForm}>
                  <label>Nombre</label>
                  <input type="text" 
                    value={categoryName} 
                    onChange={(e) => setCategoryName(e.target.value)}  
                  />
                {error && <div className={s.errorAddCat}>{error}</div>}
              </div>
              <div className={s.selectForm}>
                <label>Categoría padre</label>
                <select value={parentCategory} onChange={(e) => setParentCategory(e.target.value)}>
                  <option value={''}>Ninguno</option>
                  {
                    allCategories && allCategories.map((el) => (
                      el.parentId === null && (
                      <option value={el.id} key={el.id}>{el.name}</option>
                    )))
                  }
                </select>
              </div>           
            </div>
            <div className={s.divBtnForm}>
              <button className={s.btnForm} onClick={() => handleCancelEdit()}>Cancelar</button>
              <button className={s.btnForm} onClick={() => handleSaveCategory()}>Guardar</button>
            </div>
          </div>
          ) : (
          <div className={s.divForm}>
            <h3>Crear categoría</h3>
            <div className={s.form}>
              <div className={s.nameForm}>
                <label>Nombre</label>
                <input type="text" 
                  value={categoryName} 
                  onChange={(e) => setCategoryName(e.target.value)}  
                />
                {error && <div className={s.errorAddCat}>{error}</div>}
              </div>
              <div className={s.selectForm}>
                <label>Categoría padre</label>
                <select value={parentCategory} onChange={(e) => setParentCategory(e.target.value)}>
                  <option value={''}>Ninguno</option>
                  {
                    allCategories && allCategories.map((el) => (
                      el.parentId === null && (
                      <option value={el.id} key={el.id}>{el.name}</option>
                    )))
                  }
                </select>
              </div>           
            </div>
            <div className={s.divBtnForm}>
              <button className={s.btnForm} onClick={() => handlePostCategory()}>Añadir</button>
            </div>
          </div>
          )
        }
      </div>
    </div>
  )
}


export default CategoryManagement;