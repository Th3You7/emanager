import {
  INVOICE_FAIL,
  INVOICE_REQUEST,
  INVOICE_SUCCESS,
  RESET_INVOICE,
} from "../constants/invoiceConstants";

const invoiceReducer = (state = { loading: false, invoice: null }, action) => {
  switch (action.type) {
    case INVOICE_REQUEST:
      return {
        loading: true,
        invoice: null,
      };

    case INVOICE_SUCCESS:
      return {
        loading: false,
        invoice: action.payload,
      };

    case INVOICE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case RESET_INVOICE:
      return {};

    default:
      return state;
  }
};

export { invoiceReducer };
