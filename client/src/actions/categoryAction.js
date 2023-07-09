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

// export const postCategory = (payload) => {
//   return async function(dispatch) {
//     let response = await instance.post("categories", payload)
//     return response
//   }
// }

export const postCategory = (payload) => {
  return async function(dispatch) {
    try {
      const response = await instance.post("categories", payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
};