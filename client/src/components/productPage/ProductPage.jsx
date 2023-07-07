import React from 'react';
import ProductDetail from '../productDetail/productDetail';
import s from './ProductPage.module.css'


const ProductPage = () => {
  const product = {
    name: 'Product Name',
    description: 'Product description',
    price: 19.99,
    discount: 10,
    category: 'Category',
    images: ["https://rumay.com.ar/wp-content/uploads/2023/07/IMG_20230702_111518-scaled.jpg",
    "https://rumay.com.ar/wp-content/uploads/2023/07/IMG_20230702_110939-scaled.jpg",
    "https://rumay.com.ar/wp-content/uploads/2023/07/IMG_20230702_111722-scaled.jpg",
    "https://rumay.com.ar/wp-content/uploads/2023/07/IMG_20230702_111316-scaled.jpg",
    "https://rumay.com.ar/wp-content/uploads/2023/07/IMG_20230702_110825-scaled.jpg"],
    stock: 10,
    isVariable: true
  };

  return (
    <div className={s.divGlobal}>
      <h1>Product Page</h1>
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductPage;
