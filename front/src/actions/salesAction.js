import Axios from "axios";
import {
  ADD_SALES_FAIL,
  ADD_SALES_REQUEST,
  ADD_SALES_SUCCESS,
  RESET_SALES,
  SALES_FAIL,
  SALES_REQUEST,
  SALES_SUCCESS,
} from "../constants/salesConstants";

const salesAction = () => async (dispatch) => {
  dispatch({ type: SALES_REQUEST });
  try {
    const { data } = await Axios.get("/api/sales/all");
    dispatch({ type: SALES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SALES_FAIL, payload: error.message });
  }
};

const addSalesAction = (data) => async (dispatch) => {
  dispatch({ type: ADD_SALES_REQUEST });
  try {
    const newData = data.map((x) =>
      Object.keys(x)
        .filter(
          (key) => key !== "_id" && key !== "createdAt" && key !== "updatedAt"
        )
        .reduce((obj, key) => {
          obj[key] = x[key];

          return obj;
        }, {})
    );

    const result = await Axios.post("/api/sales/add", newData);
    dispatch({ type: ADD_SALES_SUCCESS, payload: result });
  } catch (error) {
    dispatch({ type: ADD_SALES_FAIL, payload: error });
  }
};

const resetSales = () => (dispatch) => {
  dispatch({ type: RESET_SALES });
};

export { salesAction, addSalesAction, resetSales };
