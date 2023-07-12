// import React from "react";
// import s from "./CategoryManagement.module.css";
// import { useSelector, useDispatch } from "react-redux";
// import { getCategories, postCategory, deleteCategory, getCategory } from "../../../actions/categoryAction";

// function CategoryManagement() {
//   const categories = useSelector((state) => state.categories.categories.data);
//   const category = useSelector((state) => state.categories.category.data);
//   const dispatch = useDispatch();

//   return(
//    <div className={s.container}>
//   </div> 
//   )
// }


// export default CategoryManagement;

import React, { useState, useEffect } from "react";
import s from "./CategoryManagement.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getCategories,
  postCategory,
  deleteCategory,
  getCategory,
} from "../../../actions/categoryAction";

function CategoryManagement() {
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryOrder, setNewCategoryOrder] = useState(0);
  const categories = useSelector((state) => state.categories.categories);
  const category = useSelector((state) => state.categories.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleAddCategory = async () => {
    await dispatch(
      postCategory({ name: newCategoryName, order: newCategoryOrder })
    );
    setNewCategoryName("");
    setNewCategoryOrder(0);
    dispatch(getCategories());
  };

  const handleDeleteCategory = async (categoryId) => {
    await dispatch(deleteCategory(categoryId));
    dispatch(getCategories());
  };

  const handleCategoryClick = async (categoryId) => {
    await dispatch(getCategory(categoryId));
  };

  console.log(category);

  return (
    <div className={s.container}>
      <div className={s.addCategory}>
        <input
          type="text"
          placeholder="Enter category name"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter category order"
          value={newCategoryOrder}
          onChange={(e) => setNewCategoryOrder(parseInt(e.target.value))}
        />
        <button onClick={handleAddCategory}>Add</button>
      </div>
      <div className={s.categories}>
        {categories && categories.map((category) => (
          <div key={category.id} className={s.category}>
            <button onClick={() => handleCategoryClick(category.id)}>
              {category.name}
            </button>
            <button onClick={() => handleDeleteCategory(category.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      {category !== null && typeof category !== 'undefined' ? (
        <div className={s.selectedCategory}>
          <h3>{category.name}</h3>
        </div>
      ) : <div>
        <h2>loading...</h2>
      </div>
    }
    </div>
  );
}

export default CategoryManagement;