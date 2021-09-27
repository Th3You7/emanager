import { makeStyles } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  spendingsAction,
  currSelSpendingAction,
} from "../actions/spendingsAction";
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
  { field: "spending", headerName: "Withdraw", width: 150 },
  { field: "comment", headerName: "Comment", width: 150 },
];

export default function SpendingsScreen() {
  const classes = useStyles();
  const [spendingId, setSpendingId] = useState(null);
  const [page, setPage] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();
  const { spendings, fetching, error } = useSelector(
    (state) => state.spendingsReducer
  );

  useEffect(() => {
    dispatch(spendingsAction());
  }, [dispatch]);

  const handleBack = () => {
    history.replace("/admin");
  };

  const handleAdd = () => {
    history.push("/admin/addspending");
  };

  const to = {
    pathname: `/admin/removespending/${spendingId}`,
  };

  return (
    <div className={classes.root}>
      <UpperAppBar
        handleBack={handleBack}
        handleAdd={handleAdd}
        spendingId={spendingId}
        to={to}
      />
      {error && error}
      {spendings && (
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
              setSpendingId(row.data.id);
              dispatch(currSelSpendingAction(row.data));
            }}
            //onSelectionModelChange={(row) => setId(null)}
            rows={spendings}
            loading={fetching}
            getRowId={(row) => row._id}
            disableColumnSelector={true}
            //   components={{
            //     Toolbar: customToolBar,
            //   }}
          />
        </div>
      )}
    </div>
  );
}
