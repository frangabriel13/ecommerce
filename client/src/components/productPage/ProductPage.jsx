import React from 'react';
import ProductDetail from '../productDetail/productDetail';


const ProductPage = () => {
  const product = {
    name: 'Product Name',
    description: 'Product description',
    price: 19.99,
    discount: 10,
    category: 'Category',
    images: ['https://rumay.com.ar/wp-content/uploads/2023/05/IMG_20230702_130705-scaled.jpg', 'https://rumay.com.ar/wp-content/uploads/2023/05/d-22-scaled.jpg'],
    stock: 10,
    isVariable: true
  };

  return (
    <div>
      <h1>Product Page</h1>
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductPage;
