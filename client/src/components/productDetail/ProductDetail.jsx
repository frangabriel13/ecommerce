import React, { useRef, useEffect } from 'react';
import s from './ProductDetail.module.css';
import { useState } from 'react';

const ProductDetail = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const imagesRef = useRef(null);
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const imagesContainer = imagesRef.current;
    imagesContainer.scrollTop = imagesContainer.scrollHeight; 
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = imagesContainer;
      imagesContainer.scrollLeft = scrollHeight - clientHeight - scrollTop;
    };
    imagesContainer.addEventListener('scroll', handleScroll);
    return () => {
      imagesContainer.removeEventListener('scroll', handleScroll); 
    };
  }, []);
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };
  
  return (
  <div className={s.divGlobal}>
      <div>
         <div className={s.gallery}>
            {product.images && product.images.map((image, index) => (
                 <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className={`${s.galleryImage} ${selectedImageIndex === index ? s.selected : ''}`}
                onClick={() => handleImageClick(index)}
                />
             ))}
         </div>
      </div>
      <div className={s.divImage} ref={imagesRef} >
                 {product.images && (
                   <div className={s.productoDetailImages}>
        
                      <div className={s.productoDetailImages}
                         style={{scrollSnapType: 'y mandatory', scrollPadding: '200px 0'}}>
                            {product.images.map((image, index) => (
                               <img
                                 key={index}
                                 src={image}
                                 alt={`Image ${index + 1}`}
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

