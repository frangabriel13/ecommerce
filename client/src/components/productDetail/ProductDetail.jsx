import React from 'react';
import s from './ProductDetail.module.css';
import ReactImageZoom from 'react-image-zoom';

const ProductDetail = ({ product }) => {
  return (
    <div className={s.divGlobal}>
      <div className={s.divImage}>
        {product.images && (
          <div className={s.productoDetailImagesContainer}>
            <h3>Images:</h3>
            <div className={s.productoDetailImageContainer}>
              {product.images.map((image, index) => (
                <ReactImageZoom
                  key={index}
                  zoomImage={image}
                  img={image}
                  zoomPosition="original"
                  width={400}
                  height={700}
                  defaultScale={1}
                  zoomStyle="z-index: 1000; color: red;"
                  className={s.productoDetailImage}
                />
              ))}
            </div>
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

