import {
  CATEGORIES_FAIL,
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
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

export { categoriesAction };
