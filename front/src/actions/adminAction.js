import Axios from "axios";
import {
  ADD_FAIL,
  ADD_REQUEST,
  ADD_SUCCESS,
  EDIT_FAIL,
  EDIT_REQUEST,
  EDIT_SUCCESS,
  RESET,
  DELETE_FAIL,
  DELETE_SUCCESS,
  DELETE_REQUEST,
} from "../constants/adminConstant";

const editAction = (id, values) => async (dispatch) => {
  dispatch({ type: EDIT_REQUEST });

  try {
    const result = await Axios.put(`/api/admin/edit/${id}`, values);
    dispatch({ type: EDIT_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: EDIT_FAIL, payload: err.message });
  }
};

const addAction = (values) => async (dispatch) => {
  dispatch({ type: ADD_REQUEST });

  try {
    const result = await Axios.post(`/api/admin/addproduct`, values);
    dispatch({ type: ADD_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: ADD_FAIL, payload: err.message });
  }
};

const deleteAction = (id) => async (dispatch) => {
  dispatch({ type: DELETE_REQUEST });
  try {
    const result = await Axios.delete(`/api/admin/delete/${id}`);
    dispatch({ type: DELETE_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: DELETE_FAIL, payload: err.message });
  }
};

const reset = () => (dispatch) => {
  dispatch({ type: RESET });
};

export { reset, editAction, addAction, deleteAction };
