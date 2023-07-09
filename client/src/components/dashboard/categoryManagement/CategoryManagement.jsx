import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../../actions/categoryAction";
import s from './CategoryManagement.module.css';

function CategoryManagement() {
  const categories = useSelector((state) => state.categories.categories.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  console.log(categories)

  return (
    <div className={s.container}>
      <h2>Categorías</h2>
      <div className={s.categoryContainer}>

        <div className={s.categories}>
          <div className={s.search}>
            <input type="text" placeholder="Buscar..." />
            <button>Buscar</button>
            <button>Agregar</button>
          </div>
          <div className={s.categoryList}>
            <div className={s.level1}>
              {/* Renderizar categorías de nivel 1 */}
              {categories && categories.map(category => (
                <div key={category.id}>
                  <h4 className={s.categoryName}>{category.name}</h4>
                </div>
              ))}
            </div>
            <div className={s.level2}>
              {/* Renderizar categorías de nivel 2 */}
            </div>
            <div className={s.level3}>
              {/* Renderizar categorías de nivel 3 */}
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
                {/* Renderizar opciones de categorías padre */}
              </select>
            </label>
          </div>
          <div className={s.subcategories}>
            <h4>Subcategorías:</h4>
            {/* Renderizar subcategorías de la categoría seleccionada */}
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


export default CategoryManagement;




// function CategoryManagement() {
//   return (
//     <div className={s.container}>
//       <h2>Categorías</h2>
//       <div className={s.categoryContainer}>
//         <div className={s.categoryList}>
//           <div className={s.searchBar}>
//             <input type="text" placeholder="Buscar categoría" />
//             <button>Buscar</button>
//             <button>Agregar</button>
//           </div>
//           <div className={s.categoryLevels}>
//             <div className={s.categoryLevel1}>
//               {/* Renderizar categorías de nivel 1 */}
//             </div>
//             <div className={s.categoryLevel2}>
//               {/* Renderizar categorías de nivel 2 */}
//             </div>
//             <div className={s.categoryLevel3}>
//               {/* Renderizar categorías de nivel 3 */}
//             </div>
//           </div>
//         </div>
//         <div className={s.categoryDetails}>
//           <h3>Datos de la categoría seleccionada</h3>
//           <div className={s.categoryInfo}>
//             <label>
//               Nombre:
//               <input type="text" />
//             </label>
//             <label>
//               Categoría padre:
//               <select>
//                 {/* Renderizar opciones de categorías padre */}
//               </select>
//             </label>
//           </div>
//           <div className={s.subcategories}>
//             <h4>Subcategorías:</h4>
//             {/* Renderizar subcategorías de la categoría seleccionada */}
//           </div>
//           <button>Eliminar</button>
//           <button>Guardar cambios</button>
//         </div>
//       </div>
//     </div>
//   );
// }