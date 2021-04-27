import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { UpperAppBar } from "../components";
import { Link } from "react-router-dom";
import { deleteSpendingAction } from "../actions/spendingsAction";

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

export default function RemoveSpendingScreen() {
  const classes = useStyles();
  const { spendingId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.currSelSpendingReducer);

  const to = {
    pathname: "/admin/spending",
  };

  const handleBack = () => {
    history.replace("/admin/spending");
  };

  const handleDelete = () => {
    dispatch(deleteSpendingAction(spendingId));
  };

  return (
    <div className={classes.overlay}>
      <UpperAppBar handleBack={handleBack} />
      <div className={classes.container}>
        <Typography variant="h3" component="h3" className={classes.title}>
          Remove Spending
        </Typography>
        <Typography>
          Are You Sure You wanna Delete <br />
          <b>{result.comment}</b> ?
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
