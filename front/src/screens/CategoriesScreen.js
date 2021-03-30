import { makeStyles } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { categoriesAction } from "../actions/categoriesAction";
import { UpperAppBar } from "../components";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },

  container: {
    height: 580,
    width: "90%",
    margin: theme.spacing(0, "auto"),
  },
}));

const columns = [
  { field: "id", hide: true },
  { field: "name", headerName: "Name", width: 150 },
];

export default function CategoriesScreen() {
  const classes = useStyles();
  const [categoryId, setCategoryId] = useState(null);
  const [page, setPage] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  const { categories, fetching, error } = useSelector(
    (state) => state.categoriesReducer
  );

  useEffect(() => {
    dispatch(categoriesAction());
  }, [dispatch]);

  const handleBack = () => {
    history.replace("/admin");
  };

  const handleAdd = () => {
    history.push("/admin/addcategory");
  };

  if (error) return error;

  return (
    <div className={classes.root}>
      <UpperAppBar
        handleBack={handleBack}
        handleAdd={handleAdd}
        categoryId={categoryId}
      />

      <div className={classes.container}>
        <DataGrid
          page={page}
          onPageChange={(params) => {
            setPage(params.page);
          }}
          disableColumnMenu={true}
          pageSize={10}
          columns={columns}
          onRowSelected={(row) => {
            setCategoryId(row.data.id);
            //dispatch(currSelProdAction(row.data));
          }}
          //onSelectionModelChange={(row) => setId(null)}
          rows={categories}
          loading={fetching}
          getRowId={(row) => row._id}
          disableColumnSelector={true}
          //   components={{
          //     Toolbar: customToolBar,
          //   }}
        />
      </div>
    </div>
  );
}
