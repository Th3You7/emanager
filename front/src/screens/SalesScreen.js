import React, { useEffect, useState } from "react";
import { UpperAppBar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { salesAction } from "../actions/salesAction";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

const useStyles = makeStyles((theme) => ({
  root: {
    //padding: theme.spacing(2),
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
  { field: "price", headerName: "Price", width: 70 },
  { field: "soldPrice", headerName: "Sold Price", width: 70 },
  { field: "createdAt", headerName: "Date", width: 150 },
  { field: "category", headerName: "Category", width: 100 },
];

export default function SalesScreen() {
  const classes = useStyles();
  const [id, setId] = useState(null);
  const [page, setPage] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();
  const { sales, fetching, error } = useSelector((state) => state.salesReducer);

  useEffect(() => {
    dispatch(salesAction());
  }, [dispatch]);

  const handleBack = () => {
    history.push("/admin");
  };

  if (error) return error;

  return (
    <div className={classes.root}>
      <UpperAppBar handleBack={handleBack} />

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
            setId(row.data.id);
            //dispatch(currSelProdAction(row.data));
          }}
          //onSelectionModelChange={(row) => setId(null)}
          rows={sales}
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
