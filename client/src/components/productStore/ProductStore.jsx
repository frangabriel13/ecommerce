import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, orderByPrice } from '../../actions/productActions';
import ProductCards from '../productCards/ProductCards';
import s from './ProductStore.module.css';


function ProductStore() {
  const allProducts = useSelector(state => state.products.allProducts);
  console.log(allProducts)
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const lastIndexProduct = currentPage * productsPerPage;
  const firstIndexProduct = lastIndexProduct - productsPerPage;
  const dispatch = useDispatch();
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  

  let currentProducts = [];



  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  
  

  function handleSortChange(e) {
    e.preventDefault()
    dispatch(orderByPrice(e.target.value));
    
    setCurrentPage(1);

    setSortOrder(`${e.target.value}`);
  }

  if (allProducts && allProducts.data && Array.isArray(allProducts.data)) {
    let filteredProducts = allProducts.data;
  
    currentProducts = filteredProducts.slice(firstIndexProduct, lastIndexProduct);
  }
  function handleCategoryChange(e) {
    setCategoryFilter(e.target.value);
    let filteredProducts = allProducts.data.filter(p => p.category === e.target.value);
    currentProducts = filteredProducts.slice(firstIndexProduct, lastIndexProduct);
  }
 
  // const handleCategoryChange = event => {
  //   setCategoryFilter(event.target.value);
  // };

  // const handleSortChange = event => {
  //   setSortOrder(event.target.value);
  // };

  return (
    <div className={s.productStore}>
      <div className={s.filterWrapper}>
        <label htmlFor="categoryFilter" className={s.filterLabel}>
          Filtrar por categoría:
        </label>
        <select id="categoryFilter" className={s.filterSelect} value={categoryFilter} onChange={handleCategoryChange}>
          <option value="">Todos</option>
          <option value="pantalones">Pantalones</option>
          <option value="Sweaters">Sweaters</option>
          <option value="Blazers">Blazers</option>
        </select>
      </div>

      <div className={s.filterWrapper}>
        <label htmlFor="sortOrder" className={s.filterLabel}>
          Ordenar por:
        </label>
        <select id="sortOrder" className={s.filterSelect} value={sortOrder} onChange={handleSortChange}>
          <option value="">Relevancia</option>
          <option value="price_asc">Precio ascendente</option>
          <option value="price_desc">Precio descendente</option>
        </select>
      </div>
      <div className={s.productCards}>
        <ProductCards currentProducts={currentProducts} />
      </div>
    </div>
  );
}

export default ProductStore;

