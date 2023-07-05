import React from 'react';
import s from './ProductDetail.module.css';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const ProductDetail = ({ product }) => {
  const images = product.images.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  return (
    <div className={s.divGlobal}>
      <div className={s.divImage}>
        {product.images && (
          <div className={s.productoDetailImages}>
            <h3>Images:</h3>
            <ImageGallery items={images} />
          </div>
        )}
      </div>
      <div className={s.productoDetail}>
        <h2 className={s.productoDetailName}>{product.name}</h2>
        <p className={s.productoDetailDescription}>Description: {product.description}</p>
        <p className={s.productoDetailPrice}>Price: ${product.price}</p>
        {product.discount && <p className={s.productoDetailDiscount}>Discount: {product.discount}%</p>}
        <p className={s.productoDetailCategory}>Category: {product.category}</p>
        
        <p className={s.productoDetailStock}>Stock: {product.stock}</p>
        {product.isVariable && (
          <p className={s.productoDetailVariations}>This product has variations</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;


