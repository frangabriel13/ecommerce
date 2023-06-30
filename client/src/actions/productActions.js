import instance from "../axiosCfg";

export const getProducts = () => {
  return async function (dispatch) {
    const products = await instance.get("products");
    dispatch({
      type: 'GET_USERS',
      payload: products,
    });
    return products;
  };
};