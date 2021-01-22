import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import loginReducer from "./modules/UserLogin/reducers";
import donationReducer from "./modules/AddDonation/reducers";
import productsReducer from "./modules/Products/reducers";
import productItemReducer from "./modules/Product/reducers";

const reducers = combineReducers({
  loginData: loginReducer,
  donation: donationReducer,
  products: productsReducer,
  product: productItemReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
