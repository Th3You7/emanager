import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import {
  productsReducer,
  productDetailsReducer,
  allProductsReducer,
  currSelProdReducer,
} from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";

import {
  editReducer,
  addReducer,
  deleteReducer,
} from "./reducers/adminReducer";

import {
  categoriesReducer,
  addCategoryReducer,
  deleteCategoryReducer,
  currSelCategoryReducer,
} from "./reducers/categoriesReducer";

import {
  salesReducer,
  addSalesReducer,
  deleteSaleReducer,
  currSelSaleReducer,
  confirmSalesReducer,
} from "./reducers/salesReducer";

import {
  spendingsReducer,
  addSpendingReducer,
  deleteSpendingReducer,
  currSelSpendingReducer,
} from "./reducers/spendingsReducer";

import { loanReducer, loanProfileReducer } from "./reducers/loanReducer";

const initState = {
  cartReducer: {
    products: localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : [],
  },
};

const reducer = combineReducers({
  productsReducer,
  productDetailsReducer,
  categoriesReducer,
  addCategoryReducer,
  deleteCategoryReducer,
  allProductsReducer,
  currSelProdReducer,
  currSelCategoryReducer,
  cartReducer,
  editReducer,
  addReducer,
  deleteReducer,
  salesReducer,
  addSalesReducer,
  deleteSaleReducer,
  currSelSaleReducer,
  confirmSalesReducer,
  spendingsReducer,
  addSpendingReducer,
  currSelSpendingReducer,
  deleteSpendingReducer,
  loanReducer,
  loanProfileReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initState,
  composeEnhancer(applyMiddleware(ReduxThunk))
);

export default store;
