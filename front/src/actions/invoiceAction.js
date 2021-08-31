import axios from "axios";
import {
  ALL_INVOICES_FAIL,
  ALL_INVOICES_REQUEST,
  ALL_INVOICES_SUCCESS,
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

const resetInvoiceAction = () => (dispatch) => {
  dispatch({ type: RESET_INVOICE });
};

export { allInvoicesAction, invoiceAction, resetInvoiceAction };
