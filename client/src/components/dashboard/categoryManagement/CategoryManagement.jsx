// import React, { useEffect, useState } from 'react';
// import s from './CategoryManagement.module.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { getCategories, deleteCategory, postCategory, getCategory } from '../../../actions/categoryAction';
// import { formatName } from '../../../utils/helpers';

// const CategoryManagement = () => {
//   const categories = useSelector((state) => state.categories.categories.data);
//   const category = useSelector((state) => state.categories.category)
//   const [categoryName, setCategoryName] = useState('');
//   const [error, setError] = useState('');
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getCategories());
//   }, [dispatch])

//   const handleDeleteCategory = async (id) => {
//     await dispatch(deleteCategory(id));
//     dispatch(getCategories());
//   }

//   const handlePostCategory = async () => {
//     const categoryExist = categories.find((el) => el.name.toLowerCase() === categoryName.toLowerCase().trim());
  
//     if (categoryName.trim() === '') {
//       setError('El nombre de categoría no puede estar vacío');
//     } else if (categoryExist) {
//       setError('La categoría ya existe');
//     } else {
//       await dispatch(postCategory({ name: categoryName.trim() }));
//       setCategoryName('');
//       setError('');
//       dispatch(getCategories());
//     }
//   }

//   const handleSelectCategory = async (id) => {
//     await dispatch(getCategory(id));
//   }

//   return(
//     <div className={s.container}>
//       <h2>Administrar categorías</h2>
//       <div className={s.categoryContainer}>
//         <div className={s.catContainer}>
//           <h3>Categorías</h3>
//           <div className={s.divAddCat}>
//             <input type="text" 
//               placeholder='Nombre...' 
//               value={categoryName} 
//               onChange={(e) => setCategoryName(e.target.value)} 
//             />
//             <button className={s.btnAddCategory} onClick={() => handlePostCategory()}>+</button>
//           </div>
//           {error && <div className={s.errorAddCat}>{error}</div>}
//           <div className={s.categoryList}>
//             {
//               categories && categories.map((el) => (
//                 el.parentId === null && (
//                 <div className={s.divCategory} key={el.id}>
//                   <button className={s.btnCategory} onClick={() => handleSelectCategory(el.id)}>{formatName(el.name)}</button>
//                   <button className={s.btnDeleteCategory} onClick={() => handleDeleteCategory(el.id)}>X</button>
//                 </div>
//               )))
//             }
//           </div>
//         </div>
//         {
//           category && (
//             <div className={s.subCatContainer}>
//               <h3>{category.name}</h3>
//               <div>
//                 <div>
//                   <label>Nombre:</label>
//                   <input type="text" />
//                 </div>
//                 <div>
//                   <label>Categoría padre:</label>
//                   <select>
//                     <option>Ninguna</option>
//                     {
//                       categories && categories.map((el) => (
//                         <option>{el.name}</option>
//                       ))
//                     }
//                   </select>
//                   <button>Editar</button>
//                 </div>
//               </div>
//               <div>
//                 <h4>Subcategorías</h4>
//               </div>
//             </div>
//           )
//         }
//         <div className={s.subSubCatContainer}>
//           <h3>Sub-subcategorías</h3>
//         </div>
//       </div>
//     </div>
//   )
// }


// export default CategoryManagement;





// import React, { useState } from 'react';
// import s from './CategoryManagement.module.css';

// const CategoryManagement = () => {
//   const [selectedTab, setSelectedTab] = useState('categories');
//   const [editMode, setEditMode] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   // Dummy data for demonstration purposes (replace with data fetched from your backend)
//   const categories = [
//     { id: 1, name: 'Category 1' },
//     { id: 2, name: 'Category 2' },
//   ];

//   const subcategories = [
//     { id: 3, name: 'Subcategory 1', parentId: 1 },
//     { id: 4, name: 'Subcategory 2', parentId: 1 },
//   ];

//   const subsubcategories = [
//     { id: 5, name: 'Sub-subcategory 1', parentId: 3 },
//     { id: 6, name: 'Sub-subcategory 2', parentId: 3 },
//   ];

//   const handleTabChange = (tab) => {
//     setSelectedTab(tab);
//   };

//   const handleEditClick = (category) => {
//     setSelectedCategory(category);
//     setEditMode(true);
//   };

//   const handleAddClick = () => {
//     setSelectedCategory(null);
//     setEditMode(true);
//   };

//   const handleDeleteClick = (id) => {
//     // Implement your delete logic here
//     console.log('Deleting category with ID:', id);
//   };

//   return (
//     <div>
//       <h2 className={s.title}>Administrar Categorías</h2>
//       <div>
//         <ul className={s.tabs}>
//           <li
//             className={selectedTab === 'categories' ? 'active' : ''}
//             onClick={() => handleTabChange('categories')}
//           >
//             Categorías
//           </li>
//           <li
//             className={selectedTab === 'subcategories' ? 'active' : ''}
//             onClick={() => handleTabChange('subcategories')}
//           >
//             Subcategorías
//           </li>
//           <li
//             className={selectedTab === 'subsubcategories' ? 'active' : ''}
//             onClick={() => handleTabChange('subsubcategories')}
//           >
//             Sub-subcategorías
//           </li>
//         </ul>
//         <div className={s.categoryList}>
//           <ul>
//             {selectedTab === 'categories' &&
//               categories.map((category) => (
//                 <li key={category.id}>
//                   {category.id} | {category.name} |{' '}
//                   <button onClick={() => handleEditClick(category)}>Editar</button> |{' '}
//                   <button onClick={() => handleDeleteClick(category.id)}>Eliminar</button>
//                 </li>
//               ))}
//             {selectedTab === 'subcategories' &&
//               subcategories.map((subcategory) => (
//                 <li key={subcategory.id}>
//                   {subcategory.id} | {subcategory.name} |{' '}
//                   <button onClick={() => handleEditClick(subcategory)}>Editar</button> |{' '}
//                   <button onClick={() => handleDeleteClick(subcategory.id)}>Eliminar</button>
//                 </li>
//               ))}
//             {selectedTab === 'subsubcategories' &&
//               subsubcategories.map((subsubcategory) => (
//                 <li key={subsubcategory.id}>
//                   {subsubcategory.id} | {subsubcategory.name} |{' '}
//                   <button onClick={() => handleEditClick(subsubcategory)}>Editar</button> |{' '}
//                   <button onClick={() => handleDeleteClick(subsubcategory.id)}>Eliminar</button>
//                 </li>
//               ))}
//           </ul>
//           <button className={s.addButton} onClick={handleAddClick}>Añadir</button>
//         </div>
//         <div className={s.editForm}>
//           {editMode ? (
//             // Render your edit or create form here
//             <form>
//               <label htmlFor="name">Nombre:</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={selectedCategory ? selectedCategory.name : ''}
//                 // Add onChange event handlers to update the state with form input values
//               />
//               {/* Additional fields for parentId if needed */}
//               <button type="submit">Guardar</button>
//             </form>
//           ) : null}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryManagement;





import React, { useEffect, useState } from 'react';
import s from './CategoryManagement.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories, deleteCategory, postCategory, getCategory } from '../../../actions/categoryAction';
import { formatName } from '../../../utils/helpers';

const CategoryManagement = () => {
  const categories = useSelector((state) => state.categories.categories.data);
  const category = useSelector((state) => state.categories.category);
  const [selectedTab, setSelectedTab] = useState('categories');
  const [categoryName, setCategoryName] = useState('');
  const [parentCategory, setParentCategory] = useState(null);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleTabChange = async (tab) => {
    await setSelectedTab(tab);
  };

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

  const handleDeleteCategory = async (id) => {
    await dispatch(deleteCategory(id));
    dispatch(getCategories());
  }

  return(
    <div className={s.container}>
      <h2>Administrar categorías</h2>
      <div className={s.divCategories}>
        <div className={s.divTable}>
          <ul className={s.categories}>
            <li onClick={() => handleTabChange('categories')}>Categorías</li>
            <li onClick={() => handleTabChange('subcategories')}>Subcategorías</li>
            <li onClick={() => handleTabChange('sub-subcategories')}>Sub-subcategorías</li>
          </ul>
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
                  selectedTab === 'categories' && categories && categories.map((el, index) => (
                    el.parentId === null && (
                      <tr key={el.id}>
                        <td>{index + 1}</td>
                        <td style={{ textAlign: 'left' }}>{formatName(el.name)}</td>
                        <td className={s.btnsCategory} style={{ textAlign: 'right' }}>
                          <button>Editar</button>
                          <button onClick={() => handleDeleteCategory(el.id)}>Eliminar</button>
                        </td>
                      </tr>
                    )
                  ))
                }
              </tbody> 
            </table>
          </div>          
        </div>

        <div className={s.divForm}>
          <h3>Crear categoría</h3>
          <div className={s.form}>
            <div className={s.nameForm}>
              <label>Nombre</label>
              <input type="text" 
                value={categoryName} 
                onChange={(e) => setCategoryName(e.target.value)}  
              />
            </div>
            <div className={s.selectForm}>
              <label>Categoría padre</label>
              <select>
                <option>Ninguno</option>
                {
                  categories && categories.map((el) => (
                    <option key={el.id}>{el.name}</option>
                  ))
                }
              </select>
            </div>           
          </div>
          <div className={s.divBtnForm}>
            <button className={s.btnForm} onClick={() => handlePostCategory()}>Añadir</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default CategoryManagement;