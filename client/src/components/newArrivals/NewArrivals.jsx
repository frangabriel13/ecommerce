import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import s from './NewArrivals.module.css';
import ProductCards from '../productCard/ProductCard';
import { getProducts } from '../../actions/productActions';


const NewArrivals = () => {
  // const dispatch = useDispatch();
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);
  // const products = useSelector(state => state.products.products);

  useEffect(() => {
    // dispatch(getProducts());
    setLoading(true);

    axios.get("http://localhost:3001/new-arrivals")
      .then(response => {
        setNewArrivals(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los últimos artículos', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={s.newArrivals}>
      <h2 className={s.newArrivalsTitle}>Nuevos artículos</h2>
      {loading ? (
        <div className={s.loadingMessage}>Cargando...</div>
      ) : (
        <div className={s.newArrivalsContainer}>
          {newArrivals && newArrivals.map((product) => (
            <div className={s.newArrivalsCard} key={product.id}>
              <ProductCards product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewArrivals;


