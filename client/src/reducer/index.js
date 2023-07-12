import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer,
})

export default rootReducer;