import {
  ADD_SALES_FAIL,
  ADD_SALES_REQUEST,
  ADD_SALES_SUCCESS,
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

export { salesReducer, addSalesReducer };
