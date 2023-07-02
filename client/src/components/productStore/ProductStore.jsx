import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../actions/productActions';
import ProductCards from '../productCards/ProductCards';

function ProductStore() {

  // const [categoryFilter, setCategoryFilter] = useState('');
  // const [sortOrder, setSortOrder] = useState('');
  const allProducts = useSelector(state => state.products.allProducts);
// Aquí obtienes los 12 productos en la consola

const [currentPage, setCurrentPage] = useState(1);
const [productsPerPage, setProductsPerPage] = useState(12);
const lastIndexProduct = currentPage * productsPerPage;
const firstIndexProduct = lastIndexProduct - productsPerPage;
// const currentProducts = allProducts.data.slice(firstIndexProduct, lastIndexProduct);

 const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(getProducts());
// }, [dispatch]);
let currentProducts = [];

useEffect(() => {
  dispatch(getProducts());
}, [dispatch]);

if (allProducts && allProducts.data && Array.isArray(allProducts.data)) {
  currentProducts = allProducts.data.slice(firstIndexProduct, lastIndexProduct);
}
 


  return (
    <div>
      <div>
        <label htmlFor="categoryFilter">Filtrar por categoría:</label>
        <select id="categoryFilter" >
          <option value="">Todos</option>
          <option value="categoria1">Categoría 1</option>
          <option value="categoria2">Categoría 2</option>
          <option value="categoria3">Categoría 3</option>
        </select>
      </div>

      <div>
        <label htmlFor="sortOrder">Ordenar por:</label>
        <select id="sortOrder" >
          <option value="">Relevancia</option>
          <option value="price_asc">Precio ascendente</option>
          <option value="price_desc">Precio descendente</option>
        </select>
      </div>
      <div className="product-cards-container">
        <ProductCards currentProducts={currentProducts}/>
      </div>
    </div>
  );
}

export default ProductStore;
