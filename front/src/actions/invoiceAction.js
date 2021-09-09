import axios from "axios";
import {
  ALL_INVOICES_FAIL,
  ALL_INVOICES_REQUEST,
  ALL_INVOICES_SUCCESS,
  INVOICE_DELETE_FAIL,
  INVOICE_DELETE_REQUEST,
  INVOICE_DELETE_SUCCESS,
  INVOICE_FAIL,
  INVOICE_REQUEST,
  INVOICE_SUCCESS,
  RESET_INVOICE,
} from "../constants/invoiceConstants";

const allInvoicesAction = () => async (dispatch) => {
  dispatch({ type: ALL_INVOICES_REQUEST });

  try {
    const { data } = await axios.get("/api/invoice/allInvoices");

    dispatch({ type: ALL_INVOICES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ALL_INVOICES_FAIL, payload: error });
  }
};

const invoiceAction = (data) => async (dispatch) => {
  dispatch({ type: INVOICE_REQUEST });

  try {
    const res = await axios.post("./api/invoice", data);

    dispatch({ type: INVOICE_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: INVOICE_FAIL, payload: error });
  }
};

const invoiceDeleteAction = (invoiceid) => async (dispatch) => {
  dispatch({ type: INVOICE_DELETE_REQUEST });
  try {
    const res = await axios.delete(`/api/invoice/${invoiceid}/remove`);

    dispatch({ type: INVOICE_DELETE_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: INVOICE_DELETE_FAIL, payload: error });
  }
};

const resetInvoiceAction = () => (dispatch) => {
  dispatch({ type: RESET_INVOICE });
};

export {
  allInvoicesAction,
  invoiceAction,
  resetInvoiceAction,
  invoiceDeleteAction,
};
