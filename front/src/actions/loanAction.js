import axios from "axios";
import {
  LOAN_FAIL,
  LOAN_PROFILE_FAIL,
  LOAN_PROFILE_REQUEST,
  LOAN_PROFILE_SUCCESS,
  LOAN_REQUEST,
  LOAN_SUCCESS,
} from "../constants/loanConstants";

const loanAction = () => async (dispatch) => {
  dispatch({ type: LOAN_REQUEST });

  try {
    const { data } = await axios.get("/api/loan/all");
    dispatch({ type: LOAN_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: LOAN_FAIL, payload: e.message });
  }
};

const loanProfileAction = (productid) => async (dispatch) => {
  dispatch({ type: LOAN_PROFILE_REQUEST });

  try {
    const { data } = await axios.get(`/api/loan/${productid}`);
    dispatch({ type: LOAN_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAN_PROFILE_FAIL, payload: error });
  }
};

export { loanAction, loanProfileAction };
