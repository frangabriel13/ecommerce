const initialState = {
  products: [],
  allProducts: [],
}

function productReducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload
      }
    default: return state;
  }
}

export default productReducer;