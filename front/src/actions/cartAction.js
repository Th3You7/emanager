import {
  ADD_TO_CART,
  REMOVE_ALL,
  REMOVE_FROM_CART,
} from "../constants/cartConstants";

const addToCartAction = (product) => (dispatch, getState) => {
  dispatch({ type: ADD_TO_CART, payload: product });

  localStorage.setItem(
    "products",
    JSON.stringify(getState().cartReducer.products)
  );
};

const removeFromCartAction = (productID) => (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_CART, payload: productID });

  localStorage.setItem(
    "products",
    JSON.stringify(getState().cartReducer.products)
  );
};

const removeAllAction = () => (dispatch, getState) => {
  dispatch({ type: REMOVE_ALL });

  localStorage.clear();
};

export { addToCartAction, removeFromCartAction, removeAllAction };
