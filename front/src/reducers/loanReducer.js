import {
  LOAN_FAIL,
  LOAN_PROFILE_SUCCESS,
  LOAN_PROFILE_FAIL,
  LOAN_PROFILE_REQUEST,
  LOAN_REQUEST,
  LOAN_SUCCESS,
} from "../constants/loanConstants";

const defaultState = {
  loading: true,
  loans: [],
};

const loanReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOAN_SUCCESS:
      return {
        ...state,
        loading: false,
        loans: action.payload,
      };

    case LOAN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const loanProfileReducer = (state = { loading: false, data: null }, action) => {
  switch (action.type) {
    case LOAN_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        data: null,
      };

    case LOAN_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case LOAN_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export { loanReducer, loanProfileReducer };
