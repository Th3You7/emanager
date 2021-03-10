import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import {
  productsReducer,
  productDetailsReducer,
} from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";

const reducer = combineReducers({
  productsReducer,
  productDetailsReducer,
  cartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(ReduxThunk))
);

export default store;
