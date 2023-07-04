import instance from "../axiosConfig.js";

export const getProducts = () => {
  return async function (dispatch) {
    const products = await instance.get("products");
    dispatch({
      type: 'GET_PRODUCTS',
      payload: products,
    });
    return products;
  };
};

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