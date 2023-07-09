import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer,
    // canchas: canchasReducer,
    // reservas: reservasReducer,
    // user: userReducer,
    // reviews: reviewsReducer,
})

export default rootReducer;