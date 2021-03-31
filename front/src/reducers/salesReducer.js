import {
  SALES_FAIL,
  SALES_REQUEST,
  SALES_SUCCESS,
} from "../constants/salesConstants";

const initialState = {
  fetching: true,
  sales: [],
};

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

export { salesReducer };
