import {
  ADD_FAIL,
  ADD_REQUEST,
  ADD_SUCCESS,
  DELETE_FAIL,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  EDIT_FAIL,
  EDIT_PROFILE_FAIL,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_REQUEST,
  EDIT_SUCCESS,
  GET_PROFILE_FAIL,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  RESET,
} from "../constants/adminConstant";

const initialState = { result: null, error: null, loading: false };

const getProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.payload,
      };

    case GET_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const editProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case EDIT_PROFILE_SUCCESS: {
      return {
        ...state,
        loading: false,
        result: action.payload,
      };
    }

    case EDIT_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.payload,
      };

    case EDIT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case RESET:
      return initialState;

    default:
      return state;
  }
};

const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.payload,
      };

    case ADD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case RESET:
      return initialState;

    default:
      return state;
  }
};

const deleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.payload,
      };

    case DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case RESET:
      return initialState;

    default:
      return state;
  }
};

const logInReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
        result: null,
      };

    case LOGIN_SUCCESS:
      return {
        loading: false,
        result: action.payload,
      };

    case LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case LOGOUT:
      return {};

    default:
      return state;
  }
};

export {
  editReducer,
  addReducer,
  deleteReducer,
  getProfileReducer,
  editProfileReducer,
  logInReducer,
};
