import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { Link, useHistory, useParams } from "react-router-dom";
import { deleteAction } from "../actions/adminAction";
import { useDispatch, useSelector } from "react-redux";
import { UpperAppBar } from "../components";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },

  btn: {
    background: theme.palette.error["light"],
    margin: theme.spacing(2, 0),
  },
}));

export default function RemoveScreen() {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.currSelProdReducer);

  const to = {
    pathname: "/admin/allproducts",
  };

  const handleBack = () => {
    history.replace("/admin/allproducts");
  };

  const handleDelete = () => {
    dispatch(deleteAction(id));
  };

  return (
    <div className={classes.overlay}>
      <UpperAppBar handleBack={handleBack} />
      <div className={classes.container}>
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
