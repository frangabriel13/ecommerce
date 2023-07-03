import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import s from './ProductCard.module.css'; // Asegúrate de tener el archivo CSS correspondiente



function ProductCard({ id, name, price, images }) {
const imageUrl = images && images.length > 0 ? images[0] : '';

  return (
    <div className={s.card}>
     <div className={s.img}>
      <img src={imageUrl} alt={name} className={s.img} />
         <div className={s.overlay}>
            <Link to={`/products/${id}`} className={s.detail}>
               <button>Ver más</button>
            </Link>
         </div>
      <div className={s.content}>
        <h3 className={s.name}>{name}</h3>
        <p className={s.price}>{price}</p>
      </div>
    </div>
         <Link to={`/products/${id}`} className={s.detail}>
            <span>Ver más</span>
         </Link>
      {/* <Router basename={`/products/${id}`} className={s.detail}>
        <span>Ver más</span>
      </Router> */}
    </div>
  );
};

export default ProductCard;

