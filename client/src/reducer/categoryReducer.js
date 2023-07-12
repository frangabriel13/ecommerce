const initialState = {
  categories: [],
  allCategories: [],
  category: []
}

function categoryReducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
        allCategories: action.payload
      }
    case 'POST_POKEMON':
      return {
        ...state
      }
    case 'DELETE_CATEGORY':
      return {
        ...state,
        categories: state.categories.filter(category => category.id !== action.payload)
      }
    case 'GET_CATEGORY':
      return {
        ...state,
        category: action.payload
      }
    default: return state;
  }
}


export default categoryReducer;