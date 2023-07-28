import React from "react";
import s from './ProductForm.module.css';

function ProductForm() {
  return(
    <div className={s.container}>
      <h3>Añadir Producto</h3>
      <div className={s.form}>
        <div>
          <div>
            <div>
              <label>Name</label>
              <input type="text" />
            </div>
            <div>
              <label>Categorías</label>
              <select>
                <option>Remeras</option>
                <option>Camisas</option>
                <option>Jeans</option>
                <option>Calzas</option>
                <option>Zapatos</option>
              </select>
            </div>
          </div>
          <div>
            <label>Descripción</label>
            <textarea></textarea>
          </div>
          <div>
            <label>Precio</label>
            <input type="number" />
          </div>
          <div>
            <label>Descuento</label>
            <input type="number" />
          </div>
          <div>
            <label htmlFor="stock">Stock</label>
            <input type="number" />
          </div>         
        </div>
        <div>
          <div>
            <label>Imágenes</label>
            <input type="file" />
          </div>
        </div>
      </div> 
    </div>
  )
}


export default ProductForm;