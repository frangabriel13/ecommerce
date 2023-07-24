import instance from "../axiosConfig.js";

export const getCategories = () => {
  return async function (dispatch) {
    const categories = await instance.get("categories");
    dispatch({
      type: 'GET_CATEGORIES',
      payload: categories.data,
    });
    return categories;
  };
};

export function setCategoryFilter(category){
  return async function(dispatch){
      return dispatch({
          type:'SET_CATEGORY_FILTER',
          payload:category
      })
  }
}

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

export const deleteCategory = (id) => {
  return async function(dispatch) {
    try {
      await instance.delete(`categories/${id}`);
    } catch(error) {
      console.log(error);
    }
  }
}

export const getCategory = (id) => {
  return async function(dispatch) {
    try {
      let category = await instance.get("categories/" + id);
      return dispatch({
        type: 'GET_CATEGORY',
        payload: category.data
      })
    } catch(error) {
      console.log(error);
    }
  }
}

export const filterCategories = (payload) => {
  return {
    type: 'FILTER_CATEGORIES',
    payload
  }
}