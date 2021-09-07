import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import { UpperAppBar } from "../components";
import { useHistory, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  currSelProductsAction,
  loanProductsAction,
} from "../actions/loanAction";
import { useParams } from "react-router-dom";

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
  { field: "product", headerName: "Products", width: 150 },
  { field: "unitPrice", headerName: "Unit Price", width: 100 },
  { field: "size", headerName: "Qty", width: 80 },
  { field: "time", headerName: "Date", width: 170 },
];

export default function LoanProductsScreen() {
  const classes = useStyles();
  const [productsId, setProductsId] = useState(null);
  const [page, setPage] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { profileid } = useParams();

  const { data, loading, error } = useSelector(
    (state) => state.loanProductsReducer
  );

  useEffect(() => {
    dispatch(loanProductsAction(profileid));
  }, [dispatch, profileid]);

  const handleBack = () => {
    history.goBack();
  };

  const to = {
    pathname: `${pathname}/remove/${productsId}`,
  };

  if (error) return error;

  return (
    <div className={classes.root}>
      <UpperAppBar handleBack={handleBack} productsId={productsId} to={to} />

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
            setProductsId(row.data.id);
            dispatch(currSelProductsAction(row.data));
          }}
          rows={data.map((x) => {
            return {
              ...x,
              size: Object.keys(x.sizes).reduce(
                (acc, cur) => acc + x.sizes[cur],
                0
              ),
            };
          })}
          loading={loading}
          getRowId={(row) => row._id}
          disableColumnSelector={true}
          // components={{
          //   Toolbar: customToolBar,
          // }}
        />
      </div>
    </div>
  );
}
