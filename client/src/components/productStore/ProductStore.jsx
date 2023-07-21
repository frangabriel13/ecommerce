import React, { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';

import { getProducts, orderByPrice, setCategoryFilter } from '../../actions/productActions';
import ProductCards from '../productCards/ProductCards';
import s from './ProductStore.module.css';

function ProductStore() {

  const dispatch = useDispatch();

  const products = useSelector(state => state.products.allProducts);
  console.log(products)
  // const sortedProducts = useSelector(state => state.products.filteredItems);
  const sortOrder = useSelector(state => state.products.sortOrder);

  useEffect(() => {
    dispatch(getProducts()); 
  }, [dispatch]);

  const handleSortChange = order => {
    dispatch(orderByPrice(order));
  }
  
  return (
    <div className={s.productStore}>

      <div className={s.filterWrapper}>
        <select 
          id="sortOrder"
          value={sortOrder}
          onChange={e => handleSortChange(e.target.value)}
        >
          <option value="relevance">Relevancia</option>
          <option value="price_asc">Precio ascendente</option>
          <option value="price_desc">Precio descendente</option>
        </select>
      </div>

      <ProductCards products={ products } />

    </div>
  );
}

export default ProductStore;

