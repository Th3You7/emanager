import axios from "axios";
import {
  LOAN_PROFILE_EDIT_FAIL,
  LOAN_PROFILE_EDIT_REQUEST,
  LOAN_PROFILE_EDIT_SUCCESS,
  LOAN_FAIL,
  LOAN_PAYMENTS_FAIL,
  LOAN_PAYMENTS_REQUEST,
  LOAN_PAYMENTS_SUCCESS,
  LOAN_PRODUCTS_FAIL,
  LOAN_PRODUCTS_REQUEST,
  LOAN_PRODUCTS_SUCCESS,
  LOAN_PROFILE_FAIL,
  LOAN_PROFILE_REQUEST,
  LOAN_PROFILE_SUCCESS,
  LOAN_REQUEST,
  LOAN_SUCCESS,
  LOAN_RESET,
  LOAN_PROFILE_DELETE_REQUEST,
  LOAN_PROFILE_DELETE_FAIL,
  LOAN_PROFILE_DELETE_SUCCESS,
} from "../constants/loanConstants";

const loanAction = () => async (dispatch) => {
  dispatch({ type: LOAN_REQUEST });

  try {
    const { data } = await axios.get("/api/loan/all");
    dispatch({ type: LOAN_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: LOAN_FAIL, payload: e.message });
  }
};

const loanProfileAction = (profileid) => async (dispatch) => {
  dispatch({ type: LOAN_PROFILE_REQUEST });

  try {
    const { data } = await axios.get(`/api/loan/${profileid}`);
    dispatch({ type: LOAN_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAN_PROFILE_FAIL, payload: error });
  }
};

const loanPaymentsAction = (profileid) => async (dispatch) => {
  dispatch({ type: LOAN_PAYMENTS_REQUEST });

  try {
    const { data } = await axios.get(`/api/loan/${profileid}/payments`);
    const { payments } = data;
    dispatch({ type: LOAN_PAYMENTS_SUCCESS, payload: payments });
  } catch (error) {
    dispatch({ type: LOAN_PAYMENTS_FAIL, payload: error });
  }
};

const loanProductsAction = (profileid) => async (dispatch) => {
  dispatch({ type: LOAN_PRODUCTS_REQUEST });

  try {
    const { data } = await axios.get(`/api/loan/${profileid}/products`);
    const { products } = data;
    dispatch({ type: LOAN_PRODUCTS_SUCCESS, payload: products });
  } catch (error) {
    dispatch({ type: LOAN_PRODUCTS_FAIL, payload: error });
  }
};

const loanProfileEditAction = (values, profileid) => async (dispatch) => {
  dispatch({ type: LOAN_PROFILE_EDIT_REQUEST });

  try {
    const { data } = await axios.post(`/api/loan/${profileid}/edit`, values);
    dispatch({ type: LOAN_PROFILE_EDIT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAN_PROFILE_EDIT_FAIL, payload: error });
  }
};

const loanProfileDeleteAction = (profileid) => async (dispatch) => {
  dispatch({ type: LOAN_PROFILE_DELETE_REQUEST });
  try {
    const { data } = await axios.delete(`/api/loan/${profileid}/delete`);
    dispatch({ type: LOAN_PROFILE_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAN_PROFILE_DELETE_FAIL, payload: error });
  }
};

const loanReset = () => (dispatch) => {
  dispatch({ type: LOAN_RESET });
};

export {
  loanAction,
  loanProfileAction,
  loanProductsAction,
  loanPaymentsAction,
  loanProfileEditAction,
  loanProfileDeleteAction,
  loanReset,
};
