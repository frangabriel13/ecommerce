const initialState = {
  categories: [],
  allCategories: [],
  category: [],
  
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
      
    //   case 'SET_CATEGORY_FILTER':{
    //     console.log(action.payload);
        
    //     return{
    //         ...state,
    //         categories: action.payload === 'All' ? state.categories : state.allCategories.filter(c => c.category === action.payload),
    //     }
    // }
          
     
    default: return state;
  }
}


export default categoryReducer;