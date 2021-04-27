import {
  ADD_SPENDING_FAIL,
  ADD_SPENDING_REQUEST,
  ADD_SPENDING_SUCCESS,
  REMOVE_SPENDING_FAIL,
  REMOVE_SPENDING_REQUEST,
  REMOVE_SPENDING_SUCCESS,
  SEL_SPEND,
  SPENDINGS_FAIL,
  SPENDINGS_REQUEST,
  SPENDINGS_SUCCESS,
} from "../constants/spendingConstants";

const defaultlState = {
  fetching: true,
  spendings: [],
};

const initState = {
  fetching: false,
  spending: null,
};

const spendingsReducer = (state = defaultlState, action) => {
  switch (action.type) {
    case SPENDINGS_REQUEST:
      return {
        fetching: true,
        spendings: [],
      };

    case SPENDINGS_SUCCESS:
      return {
        fetching: false,
        spendings: action.payload,
      };

    case SPENDINGS_FAIL:
      return {
        fetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const addSpendingReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_SPENDING_REQUEST:
      return {
        spending: [],
        fetching: true,
      };

    case ADD_SPENDING_SUCCESS:
      return {
        fetching: false,
        spending: action.payload,
      };

    case ADD_SPENDING_FAIL:
      return {
        fetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const deleteSpendingReducer = (state = {}, action) => {
  switch (action.type) {
    case REMOVE_SPENDING_REQUEST:
      return {
        fetching: true,
        spending: null,
      };

    case REMOVE_SPENDING_SUCCESS:
      return {
        fetching: false,
        spending: action.payload,
      };

    case REMOVE_SPENDING_FAIL:
      return {
        fetching: false,
        error: action.type,
      };

    default:
      return state;
  }
};

const currSelSpendingReducer = (state = {}, action) => {
  switch (action.type) {
    case SEL_SPEND:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export {
  spendingsReducer,
  addSpendingReducer,
  deleteSpendingReducer,
  currSelSpendingReducer,
};
