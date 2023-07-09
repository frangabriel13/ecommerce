import instance from "../axiosConfig.js";

export const getCategories = () => {
  return async function (dispatch) {
    const categories = await instance.get("categories");
    dispatch({
      type: 'GET_CATEGORIES',
      payload: categories,
    });
    return categories;
  };
};