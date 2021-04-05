import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { UpperAppBar } from "../components";
import { Link } from "react-router-dom";
import { deleteSaleAction } from "../actions/salesAction";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },

  btn: {
    background: theme.palette.error["light"],
    margin: theme.spacing(2, 0),
  },

  title: {
    fontWeight: 700,
    fontSize: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
}));

export default function RemoveScreen() {
  const classes = useStyles();
  const { saleId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.currSelSaleReducer);

  const to = {
    pathname: "/admin/sales",
  };

  console.log(saleId);

  const handleBack = () => {
    history.replace("/admin/sales");
  };

  const handleDelete = () => {
    dispatch(deleteSaleAction(saleId));
  };

  return (
    <div className={classes.overlay}>
      <UpperAppBar handleBack={handleBack} />
      <div className={classes.container}>
        <Typography variant="h3" component="h3" className={classes.title}>
          Remove Sale
        </Typography>
        <Typography>
          Are You Sure You wanna Delete <br />
          <b>{result.name}</b> ?
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to={to}
          onClick={handleDelete}
          className={classes.btn}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
