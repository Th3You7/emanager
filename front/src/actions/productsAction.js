import Axios from "axios";
import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
} from "../constants/productsConstants";

const productsAction = (category = "") => async (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });
  try {
    const { data } = await Axios.get(`/store/${category}`);
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

const allProductsAction = () => async (dispatch) => {
  dispatch({ type: ALL_PRODUCTS_REQUEST });
  try {
    const { data } = await Axios.get(`/admin/allproducts`);
    dispatch({ type: ALL_PRODUCTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: ALL_PRODUCTS_FAIL, payload: err.message });
  }
};
export { productsAction, productDetailsAction, allProductsAction };
