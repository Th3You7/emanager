import Axios from "axios";
import { SALES_FAIL, SALES_SUCCESS } from "../constants/salesConstants";

const salesAction = () => async (dispatch) => {
  dispatch({ type: SALES_SUCCESS });

  try {
    const { data } = Axios.get("/api/sales/all");
    dispatch({ type: SALES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SALES_FAIL, payload: error.message });
  }
};

export { salesAction };
