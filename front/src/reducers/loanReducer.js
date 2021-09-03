import {
  LOAN_FAIL,
  LOAN_PROFILE_SUCCESS,
  LOAN_PROFILE_FAIL,
  LOAN_PROFILE_REQUEST,
  LOAN_REQUEST,
  LOAN_SUCCESS,
  LOAN_PRODUCTS_REQUEST,
  LOAN_PAYMENTS_REQUEST,
  LOAN_PAYMENTS_SUCCESS,
  LOAN_PAYMENTS_FAIL,
  LOAN_PRODUCTS_SUCCESS,
  LOAN_PRODUCTS_FAIL,
  LOAN_PROFILE_EDIT_REQUEST,
  LOAN_PROFILE_EDIT_SUCCESS,
  LOAN_PROFILE_EDIT_FAIL,
  LOAN_RESET,
  LOAN_PROFILE_DELETE_REQUEST,
  LOAN_PROFILE_DELETE_SUCCESS,
  LOAN_PROFILE_DELETE_FAIL,
  LOAN_PROFILE_ADD_REQUEST,
  LOAN_PROFILE_ADD_SUCCESS,
  LOAN_PROFILE_ADD_FAIL,
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

const loanProductsReducer = (state = { loading: false, data: [] }, action) => {
  switch (action.type) {
    case LOAN_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOAN_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case LOAN_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const loanPaymentsReducer = (state = { loading: false, data: [] }, action) => {
  switch (action.type) {
    case LOAN_PAYMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOAN_PAYMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case LOAN_PAYMENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const loanProfileEditReducer = (
  state = { loading: false, result: null },
  action
) => {
  switch (action.type) {
    case LOAN_PROFILE_EDIT_REQUEST:
      return {
        loading: true,
        result: [],
      };

    case LOAN_PROFILE_EDIT_SUCCESS:
      return {
        loading: false,
        result: action.payload,
      };

    case LOAN_PROFILE_EDIT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case LOAN_RESET:
      return {
        loading: false,
        result: null,
        error: null,
      };

    default:
      return state;
  }
};

const loanProfileDeleteReducer = (
  state = { loading: false, result: null },
  action
) => {
  switch (action.type) {
    case LOAN_PROFILE_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOAN_PROFILE_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.payload,
      };

    case LOAN_PROFILE_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOAN_RESET:
      return {
        loading: false,
        result: null,
        error: null,
      };

    default:
      return state;
  }
};

const loanProfileAddReducer = (
  state = { loading: false, result: null, error: null },
  action
) => {
  switch (action.type) {
    case LOAN_PROFILE_ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOAN_PROFILE_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.payload,
      };

    case LOAN_PROFILE_ADD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOAN_RESET:
      return {
        loading: false,
        result: null,
        error: null,
      };

    default:
      return state;
  }
};

export {
  loanReducer,
  loanProfileReducer,
  loanPaymentsReducer,
  loanProductsReducer,
  loanProfileEditReducer,
  loanProfileDeleteReducer,
  loanProfileAddReducer,
};
