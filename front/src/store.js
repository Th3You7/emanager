import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { productsReducer } from "./reducers/productsReducer";

const reducer = combineReducers({ productsReducer });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(ReduxThunk))
);

export default store;
