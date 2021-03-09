import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productsConstants";

const defaultState = {
  fetching: true,
  products: [1, 2, 3, 4],
};

const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PRODUCTS_REQUEST:
      return {
        fetching: true,
        products: [1, 2, 3, 4],
      };

    case PRODUCTS_SUCCESS:
      return {
        fetching: false,
        products: action.payload,
      };

    case PRODUCTS_FAIL:
      return {
        fetching: false,
        products: [],
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
    default:
      return state;
  }
};

export { productsReducer, productDetailsReducer };
