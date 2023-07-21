import ProductCard from '../productCard/ProductCard';
import style from './ProductCards.module.css';
import React, { useState } from 'react';

export default function ProductCards({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className={style.container}>
      {products &&
        products.map((c) => (
          <ProductCard
            name={c.name}
            price={c.price}
            id={c.id}
            images={c.images}
            key={c.id}
            productId={c.id}
            onSelectProduct={handleProductSelect} // Pasar la función handleProductSelect como prop
          />
        ))}
    </div>
  );
}
