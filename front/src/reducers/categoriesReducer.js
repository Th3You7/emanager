import {
  ADD_CATEGORY_FAIL,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  CATEGORIES_FAIL,
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  REMOVE_CATEGORY_FAIL,
  REMOVE_CATEGORY_REQUEST,
  REMOVE_CATEGORY_SUCCESS,
  RESET_CATEGORY,
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

    case RESET_CATEGORY:
      return state;

    default:
      return state;
  }
};

const addCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        payload: action.payload,
      };

    case ADD_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case RESET_CATEGORY:
      return initialState;

    default:
      return state;
  }
};

const deleteCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        payload: action.payload,
      };

    case REMOVE_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case RESET_CATEGORY:
      return initialState;

    default:
      return state;
  }
};

const currSelCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_PROD":
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export {
  categoriesReducer,
  addCategoryReducer,
  deleteCategoryReducer,
  currSelCategoryReducer,
};
