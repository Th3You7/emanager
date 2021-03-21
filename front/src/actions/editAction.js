import Axios from "axios";
import {
  EDIT_FAIL,
  EDIT_REQUEST,
  EDIT_SUCCESS,
} from "../constants/editConstant";

const editAction = (id, values) => async (dispatch) => {
  dispatch({ type: EDIT_REQUEST });

  try {
    const result = await Axios.post(`/edit/${id}`, values);
    dispatch({ type: EDIT_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: EDIT_FAIL, payload: err.message });
  }
};

const reset = () => (dispatch) => {
  dispatch({ type: "RESET" });
};

export default editAction;

export { reset };
