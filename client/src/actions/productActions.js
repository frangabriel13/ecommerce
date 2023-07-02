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