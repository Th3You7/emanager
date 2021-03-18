import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AdminNavigation, AdminProfile, UpperAppBar } from "../components";
import {
  AccountBalanceWalletOutlined,
  LocalOfferOutlined,
  DashboardOutlined,
} from "@material-ui/icons";
import { useHistory } from "react-router";

const data = [
  { name: "Dashboard", path: "/dashboard", icon: <DashboardOutlined /> },
  { name: "Wallets", path: "/wallets", icon: <AccountBalanceWalletOutlined /> },
  { name: "Products", path: "/allproducts", icon: <LocalOfferOutlined /> },
];

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function Admin() {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };

  return (
    <div className={classes.root}>
      <UpperAppBar handleClick={handleClick} />
      <AdminProfile />
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
