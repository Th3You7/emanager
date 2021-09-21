import { makeStyles } from "@material-ui/core";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { CloudDownloadOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import {
  allInvoicesAction,
  currSelInvoiceAction,
} from "../actions/invoiceAction";
import { UpperAppBar } from "../components";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Invoice } from "../components";

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
  { field: "invoiceId", headerName: "ID", width: 100 },
  { field: "date", headerName: "Date", width: 165 },
  { field: "client", headerName: "Client", width: 120 },
  {
    field: "download",
    headerName: "Download",
    width: 100,
    renderCell: (params) => (
      <div
        style={{
          width: "100%",
          lineHeight: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
        }}
      >
        <PDFDownloadLink
          document={<Invoice data={params.row} />}
          fileName={`${params.row.invoiceId}.pdf`}
          style={{ color: "black" }}
        >
          <CloudDownloadOutlined />
        </PDFDownloadLink>
      </div>
    ),
  },

  // {
  //   field: "delete",
  //   headerName: "Delete",
  //   width: 100,
  //   renderCell: (params) => (
  //     <div
  //       style={{
  //         width: "100%",
  //         lineHeight: "1",
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         color: "black",
  //       }}
  //     >
  //       <Typography
  //         component={Link}
  //         to={{
  //           pathname: `/admin/invoices/${params.row.id}/delete`,
  //           state: { data: params.row },
  //         }}
  //         style={{ color: "black" }}
  //       >
  //         <Delete />
  //       </Typography>
  //     </div>
  //   ),
  // },
];

export default function InvoicesScreen() {
  const classes = useStyles();
  const history = useHistory();
  const [page, setPage] = useState(0);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { loading, invoices, error } = useSelector(
    (state) => state.allInvoicesReducer
  );
  const [invoiceId, setInvoiceId] = useState(null);
  useEffect(() => {
    dispatch(allInvoicesAction());
  }, [dispatch]);
  const handleBack = () => {
    history.push("/admin");
  };

  const to = {
    pathname: `${pathname}/${invoiceId}/delete`,
  };

  return (
    <div className={classes.root}>
      <UpperAppBar handleBack={handleBack} to={to} invoiceId={invoiceId} />
      {error && <div>{error}</div>}
      {invoices && (
        <div className={classes.container}>
          <DataGrid
            components={{
              Toolbar: GridToolbar,
            }}
            //disableSelectionOnClick={true}
            page={page}
            onPageChange={(params) => {
              setPage(params.page);
            }}
            disableColumnMenu={true}
            pageSize={10}
            columns={columns}
            onRowSelected={(row) => {
              console.log(row.data);
              setInvoiceId(row.data.id);
              dispatch(currSelInvoiceAction(row.data));
            }}
            //onRowSelected={(row) => console.log(row.data)}
            getRowId={(row) => row._id}
            rows={invoices.map((invoice) => {
              return {
                ...invoice,
                client: invoice.client?.name,
              };
            })}
            loading={loading}
            //disableColumnSelector={true}
          />
        </div>
      )}
    </div>
  );
}
