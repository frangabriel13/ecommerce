const initialState = {
  products: [],
  allProducts: [],
  filteredProducts: [],
  category: '',
  productById: [],
  sortOrder: 'relevance',
};

// Constants
const PRICE_ASC = 'price_asc';
const PRICE_DESC = 'price_desc';

// Función para ordenar los productos por precio
function sortProducts(products, order) {
  if (order === PRICE_ASC) {
    return products.sort((a, b) => a.price - b.price);
  } else if (order === PRICE_DESC) {
    return products.sort((a, b) => b.price - a.price);
  }
}

function productReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
      };
    case 'GET_PRODUCT_BY_ID':
      return {
        ...state,
        productById: action.payload,
      };
      case 'ORDER_BY_PRICE':
  return {
    ...state,
    filteredItems: sortProducts(state.products, action.payload),
    sortOrder: action.payload,
  };
      
    case 'SET_CATEGORY_FILTER':
      const { allProducts } = state;
      const filteredProducts = allProducts && allProducts.data ? allProducts.data.filter(
        (product) => product.category === action.payload
      ) : [];
      return {
        ...state,
        products: filteredProducts,
      };
    default:
      return state;
  }
}

export default productReducer;
