

const initialState = {
  products: [],
  allProducts: [],
  productById: [],
}

function productReducer(state = initialState, action) {
  
  switch(action.type) {
    case 'GET_PRODUCTS':
         return {
            ...state,
            allProducts: action.payload
     };
    case 'GET_PRODUCT_BY_ID':
      return {
        ...state,
        productById: action.payload,
      };
    
      case 'ORDER_BY_PRICE':
  let sortedAtt = [...state.allProducts.data];
  
  if (action.payload === 'price_asc') {
    sortedAtt.sort((a, b) => a.price - b.price);
  } else {
    sortedAtt.sort((a, b) => b.price - a.price);
  }
  return {
    ...state,
    products: sortedAtt
  };       
   
    default: return state;
 
  }
}

export default productReducer;