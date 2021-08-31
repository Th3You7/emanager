import axios from "axios";
import {
  INVOICE_FAIL,
  INVOICE_REQUEST,
  INVOICE_SUCCESS,
  RESET_INVOICE,
} from "../constants/invoiceConstants";

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

export { invoiceAction, resetInvoiceAction };
