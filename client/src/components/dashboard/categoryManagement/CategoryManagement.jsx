// import React, { useState, useEffect } from "react";
// import s from "./CategoryManagement.module.css";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   getCategories,
//   postCategory,
//   deleteCategory,
//   getCategory,
// } from "../../../actions/categoryAction";

// function CategoryManagement() {
//   const [newCategoryName, setNewCategoryName] = useState("");
//   const [newCategoryOrder, setNewCategoryOrder] = useState(0);
//   const categories = useSelector((state) => state.categories.categories.data);
//   const category = useSelector((state) => state.categories.category);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getCategories());
//   }, [dispatch]);

//   const handleAddCategory = async () => {
//     await dispatch(
//       postCategory({ name: newCategoryName, order: newCategoryOrder })
//     );
//     setNewCategoryName("");
//     setNewCategoryOrder(0);
//     dispatch(getCategories());
//   };

//   const handleDeleteCategory = async (categoryId) => {
//     await dispatch(deleteCategory(categoryId));
//     dispatch(getCategories());
//   };

//   const handleCategoryClick = async (categoryId) => {
//     await dispatch(getCategory(categoryId));
//   };

//   return (
//     <div className={s.container}>
//       <h2>Categorías</h2>
//       <div className={s.addCategory}>
//         <input
//           type="text"
//           placeholder="Ingresar nombre..."
//           value={newCategoryName}
//           onChange={(e) => setNewCategoryName(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Enter category order"
//           value={newCategoryOrder}
//           onChange={(e) => setNewCategoryOrder(parseInt(e.target.value))}
//         />
//         <button onClick={handleAddCategory}>+</button>
//       </div>
//       <div className={s.categories}>
//         {
//           categories && categories.map((category) => (
//             <div key={category.id} className={s.category}>
//               <button onClick={() => handleCategoryClick(category.id)}>{category.name}</button>
//               <button onClick={() => handleDeleteCategory(category.id)}>X</button>
//             </div>
//           ))
//         }
//       </div>
//       {
//         category !== null && typeof category !== 'undefined' ? (
//           <div className={s.selectedCategory}>
//             <h3>{category.name}</h3>
//           </div>
//         ) : <div>
//           <h2>loading...</h2>
//         </div>
//       }
//     </div>
//   );
// }

// export default CategoryManagement;

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
        <div>
          <h3>Categorías</h3>
          <div>
            <input type="text" 
              placeholder='Nombre...' 
              value={categoryName} 
              onChange={(e) => setCategoryName(e.target.value)} 
            />
            <button onClick={() => handlePostCategory()}>+</button>
          </div>
          {error && <div>{error}</div>}
          <div>
            {
              categories && categories.map((el) => (
                <div key={el.id}>
                  <button onClick={() => handleSelectCategory(el.id)}>{formatName(el.name)}</button>
                  <button onClick={() => handleDeleteCategory(el.id)}>X</button>
                </div>
              ))
            }
          </div>
        </div>
        <div>
          <h3>Subcategorías</h3>
        </div>
        <div>
          <h3>Sub-subcategorías</h3>
        </div>
      </div>
    </div>
  )
}


export default CategoryManagement;