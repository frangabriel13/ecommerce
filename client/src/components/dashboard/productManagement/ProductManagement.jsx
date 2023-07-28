import React from "react";
import ProductForm from '../productForm/ProductForm';
import s from './ProductManagement.module.css';

function ProductManagement() {
  return (
    <div className={s.container}>
      <ProductForm />
      <div>
        <h3>Lista de productos</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, soluta. Vero, laboriosam pariatur! 
          Magnam architecto expedita eaque earum dolorum soluta ea. Cupiditate hic magni nisi quisquam blanditiis 
          provident molestias non.</p>
      </div>
    </div>
  );
}


export default ProductManagement;