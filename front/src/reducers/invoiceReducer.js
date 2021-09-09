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

const allInvoicesReducer = (
  state = { loading: false, invoices: [] },
  action
) => {
  switch (action.type) {
    case ALL_INVOICES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ALL_INVOICES_SUCCESS:
      return {
        ...state,
        loading: false,
        invoices: action.payload,
      };

    case ALL_INVOICES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

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

const invoiceDeleteReducer = (
  state = { loading: false, result: null, error: null },
  action
) => {
  switch (action.type) {
    case INVOICE_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case INVOICE_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.payload,
      };

    case INVOICE_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case RESET_INVOICE:
      return {};

    default:
      return state;
  }
};
export { invoiceReducer, allInvoicesReducer, invoiceDeleteReducer };
