import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { categoryDetailReducer, categoryReducer } from "./reducers/CategoryReducer";
import { productDetailReducer,productReducer,} from "./reducers/ProductReducer";

import { sliderReducer } from "./reducers/SliderReducer";
import { CartReducer } from "./reducers/CartReducer";
import { authReducer, userReducer } from "./reducers/UserReducer";

const reducer = combineReducers({
  cat: categoryReducer,
  pro: productReducer,
  pdetail: productDetailReducer,
  slider: sliderReducer,
  cart: CartReducer,
  auth: authReducer,
  user: userReducer,
  cdetail: categoryDetailReducer,
});

let intialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

// create store
const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
