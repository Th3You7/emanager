import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
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

  const data = [
    { name: "Products", path: "/products", icon: <LocalOfferOutlined /> },
    { name: "Payments", path: "/payments", icon: <PaymentOutlined /> },
  ];

  return (
    <div className={classes.root}>
      <UpperAppBar handleBack={handleBack} />
      <LoanProfileHeader name={d.data?.name} givenName="wld saleh" />
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
    </div>
  );
}
