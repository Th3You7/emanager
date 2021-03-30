import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { UpperAppBar } from "../components";
import { Link } from "react-router-dom";
import { deleteCategoryAction } from "../actions/categoriesAction";

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
  const { categoryId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const result = useSelector((state) => state.currSelCategoryReducer);

  const to = {
    pathname: "/admin/categories",
  };

  const handleBack = () => {
    history.replace("/admin/categories");
  };

  const handleDelete = () => {
    dispatch(deleteCategoryAction(categoryId));
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
