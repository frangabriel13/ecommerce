const initialState = {
  categories: [],
  allCategories: [],
  category: [],
  items: [],
  filteredItems: [],
}

function categoryReducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_CATEGORIES':
      return {
        ...state,
        allCategories: action.payload,
        categories: action.payload,
        
      }
    case 'POST_CATEGORY':
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
      
    case 'FILTER_PRODUCTS':
            const filteredProducts = state.items.filter((product) => product.category === action.payload);
            return {
              ...state,
              filteredItems: filteredProducts,
            }
          
     
    default: return state;
  }
}


export default categoryReducer;