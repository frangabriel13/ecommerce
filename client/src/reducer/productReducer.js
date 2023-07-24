const initialState = {
  products: [],
  allProducts: [],
  searchTerm: '',
 
  // category: '',
  // productById: [],
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
// Función para realizar la búsqueda de productos
function searchProducts(products, searchTerm) {
  const keyword = searchTerm.trim().toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(keyword) ||
      product.description.toLowerCase().includes(keyword)
  );
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
          const sortedProducts = sortProducts(state.products, action.payload);
          console.log(sortedProducts);
              return {
                    ...state,
                  products: [...sortedProducts],
                };
    case 'SEARCH_PRODUCTS':
          const searchResult = searchProducts(state.allProducts, action.payload);
              return {
                  ...state,
                  products: [...searchResult],
                };
   
    case 'SET_CATEGORY_FILTER':
          const allProducts = state.allProducts;
    
            const filteredProducts = action.payload === 'All'
             ? allProducts
             : allProducts.filter(product => product.categories.some(category => category.name === action.payload));
   
              return {
                  ...state,
                  products: filteredProducts,
              };

    default:
      return state;
  }
}

export default productReducer;
