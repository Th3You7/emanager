import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  RESET,
} from "../constants/productsConstants";

const defaultState = {
  fetching: true,
  products: [],
};

const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PRODUCTS_REQUEST:
      return {
        ...state,
        fetching: true,
        products: [1, 2, 3, 4],
      };

    case PRODUCTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        products: action.payload,
      };

    case PRODUCTS_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const productDetailsReducer = (
  state = { fetching: true, product: {} },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        fetching: true,
      };

    case PRODUCT_DETAILS_SUCCESS:
      return {
        fetching: false,
        product: action.payload,
      };

    case PRODUCT_DETAILS_FAIL:
      return {
        fetching: false,
        error: action.payload,
      };

    case RESET:
      return defaultState;

    default:
      return state;
  }
};

const allProductsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS_REQUEST:
      return {
        fetching: true,
        products: [],
      };

    case ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        products: action.payload,
      };

    case ALL_PRODUCTS_FAIL:
      return {
        fetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const currSelProdReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_PROD":
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export {
  productsReducer,
  productDetailsReducer,
  allProductsReducer,
  currSelProdReducer,
};
