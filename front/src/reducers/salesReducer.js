import {
  ADD_SALES_FAIL,
  ADD_SALES_REQUEST,
  ADD_SALES_SUCCESS,
  CONFIRM_SALES_FAIL,
  CONFIRM_SALES_REQUEST,
  CONFIRM_SALES_SUCCESS,
  REMOVE_SALE_FAIL,
  REMOVE_SALE_REQUEST,
  REMOVE_SALE_SUCCESS,
  RESET_SALES,
  SALES_FAIL,
  SALES_REQUEST,
  SALES_SUCCESS,
} from "../constants/salesConstants";

const initialState = {
  fetching: true,
  sales: [],
};

const defaultlState = { result: null, error: null, loading: false };

const salesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SALES_REQUEST:
      return {
        ...state,
        fetching: true,
      };

    case SALES_SUCCESS:
      return {
        ...state,
        fetching: false,
        sales: action.payload,
      };

    case SALES_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const addSalesReducer = (state = defaultlState, action) => {
  switch (action.type) {
    case ADD_SALES_REQUEST:
      return {
        ...state,
        fetching: true,
      };

    case ADD_SALES_SUCCESS:
      return {
        ...state,
        fetching: false,
        result: action.payload,
      };

    case ADD_SALES_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };

    case RESET_SALES:
      return defaultlState;

    default:
      return state;
  }
};

const deleteSaleReducer = (
  state = { loading: false, payload: null, error: null },
  action
) => {
  switch (action.type) {
    case REMOVE_SALE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_SALE_SUCCESS:
      return {
        ...state,
        loading: false,
        payload: action.payload,
      };

    case REMOVE_SALE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case RESET_SALES:
      return {};

    default:
      return state;
  }
};

const currSelSaleReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_PROD":
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

const confirmSalesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRM_SALES_REQUEST:
      return {
        ...state,
        fetching: true,
        sales: [],
      };

    case CONFIRM_SALES_SUCCESS:
      return {
        ...state,
        fetching: false,
        sales: action.payload,
      };

    case CONFIRM_SALES_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export {
  salesReducer,
  addSalesReducer,
  deleteSaleReducer,
  currSelSaleReducer,
  confirmSalesReducer,
};
