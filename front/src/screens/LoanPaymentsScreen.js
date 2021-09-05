import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import { UpperAppBar } from "../components";
import { useHistory, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  currSelPaymentAction,
  loanPaymentsAction,
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
  { field: "payment", headerName: "Price", width: 150 },
  { field: "time", headerName: "Date", width: 200 },
];

export default function LoanProductsScreen() {
  const classes = useStyles();
  const [paymentId, setPaymentId] = useState(null);
  const [page, setPage] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { profileid } = useParams();

  useEffect(() => {
    dispatch(loanPaymentsAction(profileid));
  }, [dispatch, profileid]);

  const { data, loading, error } = useSelector(
    (state) => state.loanPaymentsReducer
  );
  const handleBack = () => {
    history.goBack();
  };

  const handleAdd = () => {
    history.push(`${pathname}/add`);
  };

  const handleRemove = () => {
    history.push(`${pathname}/remove/${paymentId}`);
  };

  const to = {
    pathname: `${pathname}/remove/${paymentId}`,
  };

  if (error) return error;

  return (
    <div className={classes.root}>
      <UpperAppBar
        handleBack={handleBack}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
        paymentId={paymentId}
        to={to}
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
            setPaymentId(row.data._id);
            dispatch(currSelPaymentAction(row.data));
          }}
          // onSelectionModelChange={(row) => setPaymentId(null)}
          rows={data}
          loading={loading}
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
