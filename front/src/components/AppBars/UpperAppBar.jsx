import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Fab, IconButton } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import {
  DeleteRounded,
  ArrowBackRounded,
  AddRounded,
  EditRounded,
  LocalGroceryStoreOutlined,
} from "@material-ui/icons/";

const useStyles = makeStyles((theme) => ({
  root: {
    position: (props) =>
      /^\/product/.test(props.pathname) ? "absolute" : "static",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(1.5, 0),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  flexGrow: {
    flexGrow: 2,
  },

  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  btn: {
    margin: theme.spacing(0, 1.2, 0, 0),
  },
}));

export default function UpperAppBar(props) {
  const {
    handleRemove,
    handleAdd,
    handleBack,
    handleStore,
    to,
    id,
    categoryId,
    saleId,
    spendingId,
  } = props;
  const classes = useStyles(useLocation());
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className={classes.root}>
      <IconButton aria-label="back" onClick={handleBack}>
        <ArrowBackRounded fontSize="inherit" />
      </IconButton>

      {/^\/cart/.test(pathname) && (
        <IconButton color="inherit" aria-label="delete" onClick={handleRemove}>
          <DeleteRounded fontSize="inherit" />
        </IconButton>
      )}

      {/^\/product/.test(pathname) && (
        <IconButton color="inherit" aria-label="store" onClick={handleStore}>
          <LocalGroceryStoreOutlined />
        </IconButton>
      )}

      {(pathname === "/admin/allproducts" ||
        pathname === "/admin/categories" ||
        pathname === "/admin/sales" ||
        pathname === "/admin/spending" ||
        pathname === "/loan") && (
        <div className={classes.flex}>
          {pathname !== "/admin/sales" && (
            <Fab
              color="primary"
              size="small"
              aria-label="add"
              className={classes.btn}
              onClick={handleAdd}
            >
              <AddRounded />
            </Fab>
          )}

          {(id || categoryId || saleId || spendingId) && (
            <Fab
              color="secondary"
              size="small"
              aria-label="delete"
              className={classes.btn}
              component={Link}
              to={to}
            >
              <DeleteRounded />
            </Fab>
          )}
          {id && (
            <Fab
              color="default"
              size="small"
              className={classes.btn}
              component={Link}
              aria-label="delete"
              to={{
                pathname: `/admin/edit/${id}`,
              }}
            >
              <EditRounded />
            </Fab>
          )}
        </div>
      )}
    </div>
  );
}
