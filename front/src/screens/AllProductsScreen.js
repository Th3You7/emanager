import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AddRounded, DeleteRounded, EditRounded } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";
import { UpperAppBar } from "../components";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { allProductsAction } from "../actions/productsAction";

const useStyles = makeStyles((theme) => ({
  root: {
    //padding: theme.spacing(2),
  },

  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    margin: theme.spacing(1, "auto", 2),
    width: "90%",
  },

  btn: {
    margin: theme.spacing(0, 0, 0, 1),
  },

  container: {
    height: 500,
    width: "90%",
    margin: theme.spacing(0, "auto"),
  },
}));

const columns = [
  { field: "id", hide: true },
  { field: "name", headerName: "Name", width: 150 },
  { field: "price", headerName: "Price", width: 70 },
  { field: "category", headerName: "Status", width: 100 },
];

export default function AllProductsScreen() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();
  const { products, fetching, error } = useSelector(
    (state) => state.allProductsReducer
  );

  useEffect(() => {
    dispatch(allProductsAction());
  }, [dispatch]);

  const handleClick = () => {
    history.goBack();
  };

  if (error) return error;

  return (
    <div className={classes.root}>
      <UpperAppBar handleClick={handleClick} />
      <div className={classes.flex}>
        <Button
          variant="contained"
          startIcon={<AddRounded />}
          color="primary"
          size="small"
          className={classes.btn}
        >
          {" "}
          Add
        </Button>
        <Button
          variant="contained"
          startIcon={<DeleteRounded />}
          color="secondary"
          size="small"
          className={classes.btn}
        >
          {" "}
          Delete
        </Button>
        <Button
          variant="contained"
          startIcon={<EditRounded />}
          color="default"
          size="small"
          className={classes.btn}
        >
          {" "}
          Edit
        </Button>
      </div>
      <div className={classes.container}>
        <DataGrid
          page={page}
          onPageChange={(params) => {
            setPage(params.page);
          }}
          pageSize={10}
          columns={columns.map((column) => ({
            ...column,
          }))}
          rows={products}
          loading={fetching}
          getRowId={(row) => row._id}
          //   components={{
          //     Toolbar: customToolBar,
          //   }}
        />
      </div>
    </div>
  );
}
