import React, { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';

import { getProducts, orderByPrice, setCategoryFilter } from '../../actions/productActions';
import ProductCards from '../productCards/ProductCards';
import s from './ProductStore.module.css';
import { getCategories } from '../../actions/categoryAction';

function ProductStore() {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.allCategories.data)
  console.log(categories);
  const products = useSelector(state => state.products.products);
  const sortOrder = useSelector(state => state.products.sortOrder);
  
  // const sortedProducts = useSelector(state => state.products.filteredItems);
  

  useEffect(() => {
    dispatch(getProducts()); 
    dispatch(getCategories());
  }, [dispatch]);

  const handleSortChange = order => {
    dispatch(orderByPrice(order));
  }

const handleCategoryChange = (category) => {  
  dispatch(setCategoryFilter(category));
};
  
  
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
      <div className={s.categoryList}>
      <ul>
        <li value='All' onClick={() => handleCategoryChange('All')}>All</li>
      {categories && categories.map(category => (
      <li value={category.name} key={category.id} onClick={() => handleCategoryChange(category.name)}>{category.name}</li>
    ))}
      </ul>
    </div>

      <ProductCards products={ products } />

    </div>
  );
}

export default ProductStore;

