import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";

const addToCartAction = (product) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: product });
};

const removeFromCartAction = (productID) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART, payload: productID });
};

export { addToCartAction, removeFromCartAction };
