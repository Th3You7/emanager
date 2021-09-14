import axios from "axios";
import {
  ADD_SPENDING_FAIL,
  ADD_SPENDING_REQUEST,
  ADD_SPENDING_SUCCESS,
  RESET_SPENDING,
  SPENDINGS_FAIL,
  SPENDINGS_REQUEST,
  SPENDINGS_SUCCESS,
  SEL_SPEND,
  REMOVE_SPENDING_REQUEST,
  REMOVE_SPENDING_SUCCESS,
  REMOVE_SPENDING_FAIL,
} from "../constants/spendingConstants";

const spendingsAction = () => async (dispatch) => {
  dispatch({ type: SPENDINGS_REQUEST });
  try {
    const { data } = await axios.get(
      "https://manage-commerce.herokuapp.com/api/spending/all"
    );
    dispatch({ type: SPENDINGS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SPENDINGS_FAIL, payload: error.message });
  }
};

const addSpendingAction = (values) => async (dispatch) => {
  dispatch({ type: ADD_SPENDING_REQUEST });
  try {
    const { data } = await axios.post(
      "https://manage-commerce.herokuapp.com/api/spending/add",
      values
    );
    dispatch({ type: ADD_SPENDING_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_SPENDING_FAIL, payload: error.message });
  }
};

const currSelSpendingAction = (spending) => (dispatch) => {
  dispatch({ type: SEL_SPEND, payload: spending });
};

const deleteSpendingAction = (id) => async (dispatch) => {
  dispatch({ type: REMOVE_SPENDING_REQUEST });
  try {
    const response = await axios.delete(
      `https://manage-commerce.herokuapp.com/api/spending/delete/${id}`
    );
    dispatch({ type: REMOVE_SPENDING_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: REMOVE_SPENDING_FAIL, payload: error });
  }
};

const resetSpending = () => (dispatch) => {
  dispatch({ type: RESET_SPENDING });
};

export {
  spendingsAction,
  addSpendingAction,
  deleteSpendingAction,
  currSelSpendingAction,
  resetSpending,
};
