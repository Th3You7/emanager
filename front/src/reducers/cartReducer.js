import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";

const cartReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case REMOVE_FROM_CART:
      const removedProductId = action.payload;
      const newArr = state.products.filter((x) => x._id !== removedProductId);
      return {
        ...state,
        products: [...newArr],
      };

    default:
      return state;
  }
};

export default cartReducer;
