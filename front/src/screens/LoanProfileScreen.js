import React, { useEffect } from "react";
import { makeStyles, Paper } from "@material-ui/core";
import { LoanProfileHeader, UpperAppBar, AdminNavigation } from "../components";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { LocalOfferOutlined, PaymentOutlined } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { loanProfileAction } from "../actions/loanAction";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    width: "90%",
    margin: theme.spacing(0, "auto"),
  },
  paper: {
    width: "95%",
    height: theme.spacing(6),
    margin: theme.spacing(0, "auto", 0.5),
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    justifyContent: "center",
    background: theme.palette.error["light"],
    color: theme.palette.error["contrastText"],
  },
}));

export default function LoanProfileScreen() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const d = useSelector((state) => state.loanProfileReducer);
  const { profileid } = useParams();
  const { pathname } = location;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loanProfileAction(profileid));
  }, [dispatch, profileid]);

  const handleBack = () => {
    history.replace("/loan");
  };

  const handleClick = () => {
    history.push(`/loan/${profileid}/delete`);
  };

  const data = [
    { name: "Products", path: "/products", icon: <LocalOfferOutlined /> },
    { name: "Payments", path: "/payments", icon: <PaymentOutlined /> },
  ];

  const allProductsPrice = d?.data?.products
    .map((product) => {
      const qty = Object.keys(product.sizes).reduce(
        (acc, cur) => acc + product[cur],
        0
      );

      return Number(qty * product.unitPrice);
    })
    .map((acc, cur) => acc + cur, 0);

  const allPayments = d?.data?.payments.reduce(
    (acc, curr) => acc + curr["payment"],
    0
  );

  return (
    <div className={classes.root}>
      <UpperAppBar handleBack={handleBack} />
      <LoanProfileHeader
        name={d?.data?.name}
        phone={d?.data?.phone}
        img={d?.data?.img}
        productsSum={allProductsPrice}
        paymentsSum={allPayments}
      />
      {data.map((item, index) => {
        return (
          <AdminNavigation
            key={index}
            name={item.name}
            path={`${pathname}${item.path}`}
          >
            {item.icon}
          </AdminNavigation>
        );
      })}
      <Paper
        variant="outlined"
        className={classes.paper}
        elevation={0}
        onClick={handleClick}
      >
        Delete
      </Paper>
    </div>
  );
}
