import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAIL,
} from "../constants/productsConstants";

const defaultState = {
  fetching: true,
  products: [],
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

export { productsReducer };
