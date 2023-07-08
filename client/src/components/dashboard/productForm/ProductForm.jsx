import React from "react";
import s from './ProductForm.module.css';

function ProductForm() {
  return (
    <div className={s.container}>
      <h2>Añadir producto</h2>
      <div>
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" />
          <label htmlFor="description">Descripción</label>
          <textarea />
        </div>
        <div>
          <label htmlFor="category">Categoría</label>
          <select>
            <option value="ninguno">Ninguna</option>
            <option value="remeras">Remeras</option>
            <option value="remeras">Camperas</option>
            <option value="remeras">Buzos</option>
            <option value="remeras">Camisas</option>
            <option value="remeras">Pantalones</option>
          </select>
          <label htmlFor="price">Precio</label>
          <input type="number" />
        </div>
        <div>
          <label htmlFor="stock">Stock</label>
          <input type="number" />
          <label htmlFor="discount">Descuento</label>
          <input type="number" />
        </div>
      </div>
      <div>
        <label>Imágenes</label>
        <div>
          {/* Mostrar las imágenes seleccionadas */}
        </div>
        <input type="file" />

        <label>
          Disponibilidad:
          <input type="checkbox" />
        </label>

        <button>Agregar variaciones</button>
        <button>Crear producto</button>
      </div>
    </div>
  );
}


export default ProductForm;



// import React, { useState } from 'react';

// const AddProductForm = () => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('');
//   const [price, setPrice] = useState(0);
//   const [stock, setStock] = useState(0);
//   const [discount, setDiscount] = useState(0);
//   const [images, setImages] = useState([]);
//   const [availability, setAvailability] = useState(false);

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//   };

//   const handlePriceChange = (e) => {
//     setPrice(e.target.value);
//   };

//   const handleStockChange = (e) => {
//     setStock(e.target.value);
//   };

//   const handleDiscountChange = (e) => {
//     setDiscount(e.target.value);
//   };

//   const handleImageUpload = (e) => {
//     const selectedImages = Array.from(e.target.files);
//     setImages(selectedImages);
//   };

//   const handleAvailabilityChange = () => {
//     setAvailability(!availability);
//   };

//   const handleAddVariations = () => {
//     // Lógica para agregar variaciones al producto
//   };

//   const handleCreateProduct = () => {
//     // Lógica para crear el producto con los datos ingresados
//   };

//   return (
//     <div>
//       <h2>Añadir producto</h2>
//       <div style={{ display: 'flex' }}>
//         {/* Columna izquierda */}
//         <div style={{ marginRight: '2rem' }}>
//           <label htmlFor="name">Nombre</label>
//           <input type="text" id="name" value={name} onChange={handleNameChange} />

//           <label htmlFor="description">Descripción</label>
//           <textarea id="description" value={description} onChange={handleDescriptionChange} />

//           <label htmlFor="category">Categoría</label>
//           <select id="category" value={category} onChange={handleCategoryChange}>
//             {/* Opciones de categoría */}
//           </select>

//           <label htmlFor="price">Precio</label>
//           <input type="number" id="price" value={price} onChange={handlePriceChange} />

//           <label htmlFor="stock">Stock</label>
//           <input type="number" id="stock" value={stock} onChange={handleStockChange} />

//           <label htmlFor="discount">Descuento</label>
//           <input type="number" id="discount" value={discount} onChange={handleDiscountChange} />
//         </div>

//         {/* Columna derecha */}
//         <div>
//           <label>Imágenes</label>
//           <div>
//             {/* Mostrar las imágenes seleccionadas */}
//           </div>
//           <input type="file" multiple onChange={handleImageUpload} />

//           <label>
//             Disponibilidad:
//             <input type="checkbox" checked={availability} onChange={handleAvailabilityChange} />
//           </label>

//           <button onClick={handleAddVariations}>Agregar variaciones</button>
//           <button onClick={handleCreateProduct}>Crear producto</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddProductForm;