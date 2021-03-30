import {
  CATEGORIES_FAIL,
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAIL,
  RESET_CATEGORY,
} from "../constants/categoriesConstant";
import axios from "axios";

const categoriesAction = () => async (dispatch) => {
  dispatch({ type: CATEGORIES_REQUEST });
  try {
    const { data } = await axios.get("/api/category");
    dispatch({ type: CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CATEGORIES_FAIL, payload: error.message });
  }
};

const addCategoryAction = (values) => async (dispatch) => {
  dispatch({ type: ADD_CATEGORY_REQUEST });

  try {
    const { data } = await axios.post("/api/category/add", values);

    dispatch({ type: ADD_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_CATEGORY_FAIL, payload: error.message });
  }
};

const deleteCategoryAction = (id) => async (dispatch) => {
  dispatch({ type: ADD_CATEGORY_REQUEST });

  try {
    const response = await axios.post(`/api/category/delete/${id}`);

    dispatch({ type: ADD_CATEGORY_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: ADD_CATEGORY_FAIL, payload: error.message });
  }
};

const resetCategory = () => (dispatch) => {
  dispatch({ type: RESET_CATEGORY });
};

export {
  categoriesAction,
  addCategoryAction,
  deleteCategoryAction,
  resetCategory,
};
