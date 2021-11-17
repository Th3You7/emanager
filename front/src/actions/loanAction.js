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
  LOAN_PROFILE_ADD_REQUEST,
  LOAN_PROFILE_ADD_SUCCESS,
  LOAN_PROFILE_ADD_FAIL,
  LOAN_PAYMENTS_ADD_REQUEST,
  LOAN_PAYMENTS_ADD_SUCCESS,
  LOAN_PAYMENTS_ADD_FAIL,
  LOAN_PAYMENTS_REMOVE_REQUEST,
  LOAN_PAYMENTS_REMOVE_SUCCESS,
  LOAN_PAYMENTS_REMOVE_FAIL,
  LOAN_PRODUCTS_ADD_REQUEST,
  LOAN_PRODUCTS_ADD_FAIL,
  LOAN_PRODUCTS_ADD_SUCCESS,
  LOAN_PRODUCTS_REMOVE_REQUEST,
  LOAN_PRODUCTS_REMOVE_FAIL,
  LOAN_PRODUCTS_REMOVE_SUCCESS,
} from "../constants/loanConstants";

const url = `https://jabstore.herokuapp.com/`;

const loanAction = () => async (dispatch) => {
  dispatch({ type: LOAN_REQUEST });

  try {
    const { data } = await axios.get(`${url}/api/loan/all`);
    dispatch({ type: LOAN_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: LOAN_FAIL, payload: e.message });
  }
};

const loanProfileAction = (profileid) => async (dispatch) => {
  dispatch({ type: LOAN_PROFILE_REQUEST });

  try {
    const { data } = await axios.get(`${url}/api/loan/${profileid}`);
    dispatch({ type: LOAN_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAN_PROFILE_FAIL, payload: error });
  }
};

const loanPaymentsAction = (profileid) => async (dispatch) => {
  dispatch({ type: LOAN_PAYMENTS_REQUEST });

  try {
    const { data } = await axios.get(`${url}/api/loan/${profileid}/payments`);
    const { payments } = data;
    dispatch({ type: LOAN_PAYMENTS_SUCCESS, payload: payments });
  } catch (error) {
    dispatch({ type: LOAN_PAYMENTS_FAIL, payload: error });
  }
};

const loanPaymentsAddAction =
  ({ profileid, payment }) =>
  async (dispatch) => {
    dispatch({ type: LOAN_PAYMENTS_ADD_REQUEST });
    try {
      const result = await axios.post(
        `${url}/api/loan/${profileid}/payments/add`,
        {
          payment,
        }
      );

      dispatch({ type: LOAN_PAYMENTS_ADD_SUCCESS, payload: result });
    } catch (error) {
      dispatch({ type: LOAN_PAYMENTS_ADD_FAIL, payload: error });
    }
  };

const loanPaymentsRemoveAction =
  ({ profileId, paymentId }) =>
  async (dispatch) => {
    dispatch({ type: LOAN_PAYMENTS_REMOVE_REQUEST });
    try {
      const res = await axios.delete(
        `${url}/api/loan/${profileId}/payments/remove`,
        {
          data: { paymentId },
        }
      );
      dispatch({ type: LOAN_PAYMENTS_REMOVE_SUCCESS, payload: res });
    } catch (error) {
      dispatch({ type: LOAN_PAYMENTS_REMOVE_FAIL, payload: error });
    }
  };

const loanProductsAction = (profileid) => async (dispatch) => {
  dispatch({ type: LOAN_PRODUCTS_REQUEST });

  try {
    const { data } = await axios.get(`${url}/api/loan/${profileid}/products`);
    const { products } = data;
    dispatch({ type: LOAN_PRODUCTS_SUCCESS, payload: products });
  } catch (error) {
    dispatch({ type: LOAN_PRODUCTS_FAIL, payload: error });
  }
};

const loanProductsAddAction =
  ({ products, profileid }) =>
  async (dispatch) => {
    dispatch({ type: LOAN_PRODUCTS_ADD_REQUEST });
    try {
      const res = await axios.post(`${url}/api/loan/${profileid}/addproducts`, {
        products,
      });
      dispatch({ type: LOAN_PRODUCTS_ADD_SUCCESS, payload: res });
    } catch (error) {
      dispatch({ type: LOAN_PRODUCTS_ADD_FAIL, payload: error });
    }
  };

const loanProductsRemoveACtion =
  ({ products, profileId }) =>
  async (dispatch) => {
    dispatch({ type: LOAN_PRODUCTS_REMOVE_REQUEST });
    try {
      const res = await axios.delete(
        `${url}/api/loan/${profileId}/removeProducts`,
        {
          data: { products },
        }
      );
      dispatch({ type: LOAN_PRODUCTS_REMOVE_SUCCESS, payload: res });
    } catch (error) {
      dispatch({ type: LOAN_PRODUCTS_REMOVE_FAIL, payload: error });
    }
  };

const loanProfileEditAction = (values, profileid) => async (dispatch) => {
  dispatch({ type: LOAN_PROFILE_EDIT_REQUEST });

  try {
    const { data } = await axios.post(
      `${url}/api/loan/${profileid}/edit`,
      values
    );
    dispatch({ type: LOAN_PROFILE_EDIT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAN_PROFILE_EDIT_FAIL, payload: error });
  }
};

const loanProfileDeleteAction = (profileid) => async (dispatch) => {
  dispatch({ type: LOAN_PROFILE_DELETE_REQUEST });
  try {
    const { data } = await axios.delete(`${url}/api/loan/${profileid}/delete`);
    dispatch({ type: LOAN_PROFILE_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAN_PROFILE_DELETE_FAIL, payload: error });
  }
};

const currSelPaymentAction = (paymentid) => async (dispatch) => {
  dispatch({ type: "SEL_PAY", payload: paymentid });
};

const currSelProductsAction = (paymentid) => async (dispatch) => {
  dispatch({ type: "SEL_PROD", payload: paymentid });
};

const loanProfileAddAction = (data) => async (dispatch) => {
  dispatch({ type: LOAN_PROFILE_ADD_REQUEST });

  try {
    const res = await axios.post(`${url}/api/loan/add`, data);
    dispatch({ type: LOAN_PROFILE_ADD_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: LOAN_PROFILE_ADD_FAIL, payload: error });
  }
};

const loanReset = () => (dispatch) => {
  dispatch({ type: LOAN_RESET });
};

export {
  loanAction,
  loanProfileAction,
  loanProductsAction,
  loanProductsAddAction,
  loanProductsRemoveACtion,
  loanPaymentsAction,
  loanPaymentsAddAction,
  loanPaymentsRemoveAction,
  loanProfileEditAction,
  loanProfileDeleteAction,
  loanProfileAddAction,
  currSelPaymentAction,
  currSelProductsAction,
  loanReset,
};
