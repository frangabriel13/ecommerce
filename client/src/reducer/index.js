import productReducer from "./productReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
  products: productReducer,
    // auth: authReducer,
    // canchas: canchasReducer,
    // reservas: reservasReducer,
    // user: userReducer,
    // reviews: reviewsReducer,
})

export default rootReducer;