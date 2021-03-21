import {
  EDIT_FAIL,
  EDIT_REQUEST,
  EDIT_SUCCESS,
} from "../constants/editConstant";

const initialState = { result: null, error: null, loading: false };

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

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

export default editReducer;
