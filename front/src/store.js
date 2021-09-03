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
  getProfileReducer,
  editProfileReducer,
  logInReducer,
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

import {
  loanReducer,
  loanProfileReducer,
  loanPaymentsReducer,
  loanProductsReducer,
  loanProfileEditReducer,
  loanProfileDeleteReducer,
  loanProfileAddReducer,
} from "./reducers/loanReducer";

import { invoiceReducer, allInvoicesReducer } from "./reducers/invoiceReducer";

const initState = {
  cartReducer: {
    products: localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : [],
  },

  logInReducer: {
    result: {
      token: localStorage.getItem("admin")
        ? JSON.parse(localStorage.getItem("admin")).token
        : undefined,
    },
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
  loanProductsReducer,
  loanPaymentsReducer,
  loanProfileEditReducer,
  loanProfileDeleteReducer,
  loanProfileAddReducer,
  getProfileReducer,
  editProfileReducer,
  logInReducer,
  invoiceReducer,
  allInvoicesReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initState,
  composeEnhancer(applyMiddleware(ReduxThunk))
);

export default store;
