import {
  ADD_TO_CART,
  REMOVE_ALL,
  REMOVE_FROM_CART,
} from "../constants/cartConstants";

const cartReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case REMOVE_FROM_CART:
      const removedProductIndex = action.payload;
      const newArr = state.products.filter(
        (x, index) => index !== removedProductIndex
      );

      return {
        ...state,
        products: [...newArr],
      };

    case REMOVE_ALL:
      return {
        ...state,
        products: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
