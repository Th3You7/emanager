import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AdminNavigation, AdminProfile, UpperAppBar } from "../components";
import {
  AccountBalanceWalletOutlined,
  LocalOfferOutlined,
  DashboardOutlined,
} from "@material-ui/icons";

const data = [
  { name: "Dashboard", icon: <DashboardOutlined /> },
  { name: "Wallets", icon: <AccountBalanceWalletOutlined /> },
  { name: "Products", icon: <LocalOfferOutlined /> },
];

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function Admin() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <UpperAppBar />
      <AdminProfile />
      {data.map((item, index) => {
        return (
          <AdminNavigation key={index} name={item.name}>
            {item.icon}
          </AdminNavigation>
        );
      })}
    </div>
  );
}
