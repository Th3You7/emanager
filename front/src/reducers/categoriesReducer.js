import {
  CATEGORIES_FAIL,
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
} from "../constants/categoriesConstant";

const initialState = {
  fetching: true,
  categories: [],
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case CATEGORIES_SUCCESS:
      return {
        ...state,
        fetching: false,
        categories: action.payload,
      };
    case CATEGORIES_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export { categoriesReducer };
