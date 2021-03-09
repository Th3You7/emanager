import Axios from "axios";
import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productsConstants";

const productsAction = () => async (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });
  try {
    const { data } = await Axios.get("/store");
    dispatch({ type: PRODUCTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: PRODUCTS_FAIL, payload: err.message });
  }
};

const productDetailsAction = (productId) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST });

  try {
    const { data } = await Axios.get(`/product/${productId}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: err.message });
  }
};

export { productsAction, productDetailsAction };
