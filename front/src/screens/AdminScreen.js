import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AdminNavigation, AdminProfile, UpperAppBar } from "../components";
import {
  AccountBalanceWalletOutlined,
  LocalOfferOutlined,
  DashboardOutlined,
  ShopOutlined,
  StyleOutlined,
  MoneyOffOutlined,
  DescriptionOutlined,
} from "@material-ui/icons";
import { useHistory } from "react-router";
import { getProfileAction } from "../actions/adminAction";
import { useDispatch, useSelector } from "react-redux";

const data = [
  { name: "Wallets", path: "/wallet", icon: <AccountBalanceWalletOutlined /> },
  { name: "Dashboard", path: "/dashboard", icon: <DashboardOutlined /> },
  { name: "Categories", path: "/categories", icon: <StyleOutlined /> },
  { name: "Products", path: "/allproducts", icon: <LocalOfferOutlined /> },
  { name: "Sales", path: "/sales", icon: <ShopOutlined /> },
  { name: "Invoices", path: "/invoices", icon: <DescriptionOutlined /> },
  { name: "Spending", path: "/spending", icon: <MoneyOffOutlined /> },
];

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function Admin() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.getProfileReducer);

  useEffect(() => {
    dispatch(getProfileAction());
  }, [dispatch]);

  const handleBack = () => {
    history.replace("/store");
  };

  return (
    <div className={classes.root}>
      <UpperAppBar handleBack={handleBack} />
      <AdminProfile data={result} />
      {data.map((item, index) => {
        return (
          <AdminNavigation
            key={index}
            name={item.name}
            path={`/admin${item.path}`}
          >
            {item.icon}
          </AdminNavigation>
        );
      })}
    </div>
  );
}
