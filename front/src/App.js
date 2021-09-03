import React, { useEffect } from "react";
import {
  Store,
  Product,
  Cart,
  Admin,
  AllProducts,
  Edit,
  Add,
  Remove,
  Wallet,
  Dashboard,
  Categories,
  AddCategory,
  RemoveCategory,
  Sales,
  Confirm,
  RemoveSale,
  Spending,
  RemoveSpending,
  AddSpending,
  Loan,
  LoanProfile,
  LoanPayments,
  LoanProducts,
  LoanProfileEdit,
  LoanProfileRemove,
  LoanProfileAdd,
  AdminEdit,
  LogIn,
  Invoices,
} from "./screens";
import { Redirect, Route, Switch } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";
import { logOutAction } from "./actions/adminAction";
const useStyles = makeStyles(() => ({
  app: {
    position: "relative",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const { result } = useSelector((state) => state.logInReducer);

  //* here use location check routes redirections, and if it change and no valid token was there(expired), it will redirect the app to the login in screen
  useEffect(() => {
    const token = result?.token;

    if (location) {
      if (token) {
        const decoded = decode(token);
        if (decoded.exp * 1000 < new Date().getTime()) {
          history.push("/login");
          dispatch(logOutAction());
        }
      }
    }
  }, [location, result, history, dispatch]);
  //* if no token
  useEffect(() => {
    const token = result?.token;
    if (!token) {
      history.push("/login");
    }
  }, [result, history, dispatch]);
  return (
    <div className={classes.app}>
      <Switch>
        <Redirect exact from="/" to="/store" />
        <Route path="/login" children={<LogIn />} />
        <Route path="/store/:ctgry?" children={<Store />} />
        <Route path="/product/:id" children={<Product />} />
        <Route path="/cart/:id?" children={<Cart />} />
        <Route exact path="/admin" children={<Admin />} />
        <Route exact path="/admin/edit" children={<AdminEdit />} />
        <Route path="/admin/allproducts" children={<AllProducts />} />
        <Route path="/admin/categories" children={<Categories />} />
        <Route path="/admin/edit/:id" children={<Edit />} />
        <Route path="/admin/add" children={<Add />} />
        <Route path="/admin/remove/:id" children={<Remove />} />
        <Route path="/admin/wallet" children={<Wallet />} />
        <Route path="/admin/dashboard" children={<Dashboard />} />
        <Route path="/admin/addcategory" children={<AddCategory />} />
        <Route
          path="/admin/removecategory/:categoryId"
          children={<RemoveCategory />}
        />
        <Route path="/admin/sales" children={<Sales />} />
        <Route path="/admin/removesale/:saleId" children={<RemoveSale />} />
        <Route path="/confirm" children={<Confirm />} />
        <Route path="/admin/spending" children={<Spending />} />
        <Route path="/admin/addspending" children={<AddSpending />} />
        <Route
          path="/admin/removespending/:spendingId"
          children={<RemoveSpending />}
        />
        <Route exact path="/loan" children={<Loan />} />
        <Route exact path="/loan/add" children={<LoanProfileAdd />} />
        <Route exact path="/loan/:profileid" children={<LoanProfile />} />

        <Route path="/loan/:profileid/products" children={<LoanProducts />} />
        <Route path="/loan/:profileid/payments" children={<LoanPayments />} />
        <Route path="/loan/:profileid/edit" children={<LoanProfileEdit />} />
        <Route
          path="/loan/:profileid/delete"
          children={<LoanProfileRemove />}
        />

        <Route path="/admin/invoices" children={<Invoices />} />
      </Switch>
    </div>
  );
}

export default App;
