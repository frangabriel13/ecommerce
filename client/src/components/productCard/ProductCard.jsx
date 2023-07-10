import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import s from './ProductCard.module.css'; // Asegúrate de tener el archivo CSS correspondiente



const ProductCard = ({ name, price, id, images, onSelectProduct, productId }) => {
  const handleCardClick = () => {
    const product = { name, price, id, images }; // Crear un objeto que representa el producto seleccionado
    onSelectProduct(product); // Llamar a la función onSelectProduct y pasar el producto seleccionado
  };

  const imageUrl = images && images.length > 0 ? images[0] : '';

  return (
    <div className={s.card}>
     <div className={s.img}>
      <img src={imageUrl} alt={name}  />
         <div className={s.overlay}>
         <Link to={`/products/${productId}`}>Ver detalles</Link>

         </div>
      <div onClick={handleCardClick} className={s.content}>
        <h3 className={s.name}>{name}</h3>
        <p className={s.price}>{price}</p>
      </div>
    </div>
         <Link to={`/products/${id}`} className={s.detail}>
            <span>Ver más</span>
         </Link>
     
    </div>
  );
};

export default ProductCard;

