import { DirectionsCarSharp } from "@material-ui/icons";
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
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../constants/adminConstant";

//sending token with all requests
Axios.interceptors.request.use((req) => {
  if (localStorage.getItem("admin")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("admin")
    )}`;
  }

  return req;
});

const logInAction = (input) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const { data } = await Axios.post("/api/auth/login", input);
    const { token } = data;
    localStorage.setItem("admin", JSON.stringify(token));
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error });
  }
};

const logOutAction = () => (dispatch) => {
  localStorage.removeItem("admin");
  dispatch({ type: LOGOUT });
};

const getProfileAction = () => async (dispatch) => {
  dispatch({ type: GET_PROFILE_REQUEST });

  try {
    const result = await Axios.get(`/api/admin/getProfile`);
    dispatch({ type: GET_PROFILE_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: GET_PROFILE_FAIL, payload: err.message });
  }
};

const editProfileAction = (values) => async (dispatch) => {
  dispatch({ type: EDIT_PROFILE_REQUEST });
  try {
    const result = await Axios.put(`/api/admin/editProfile`, values);
    dispatch({ type: EDIT_PROFILE_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: EDIT_PROFILE_FAIL, payload: err.message });
  }
};

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

export {
  reset,
  editAction,
  addAction,
  deleteAction,
  editProfileAction,
  getProfileAction,
  logInAction,
  logOutAction,
};
