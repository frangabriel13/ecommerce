import instance from "../axiosConfig.js";

export const getProducts = () => {
  return async function (dispatch) {
    const products = await instance.get("products");
    dispatch({
      type: 'GET_PRODUCTS',
      payload: products.data,
    });
    return products;
  };
};

export const getProductById = (productId) => {
  return async function(dispatch) {
    try {
      const response = await instance.get(`products/${productId}`);
      dispatch({
        type: 'GET_PRODUCT_BY_ID',
        payload: response.data
      });
      return response.data; // Devuelve los datos del producto
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  };
}
export const searchProducts = (searchTerm) => ({
  type: 'SEARCH_PRODUCTS',
  payload: searchTerm,
});

// Acción para realizar la búsqueda en el navbar
export const searchProductsHeader = (searchTerm) => {
  return {
    type: 'SEARCH_PRODUCTS_NAVBAR',
    payload: searchTerm,
  };
};
export function clearSearchResults()  {
  return {
    type: 'CLEAR_SEARCH_RESULTS',
  }
}

export function orderByPrice(payload) {
  return {
    type: 'ORDER_BY_PRICE',
    payload
  }
};

export function setCategoryFilter (payload) {
  return {
    type: 'SET_CATEGORY_FILTER',
    payload
  }; 
};