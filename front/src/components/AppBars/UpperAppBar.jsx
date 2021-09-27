import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Fab, IconButton } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import {
  DeleteRounded,
  ArrowBackRounded,
  AddRounded,
  EditRounded,
  LocalGroceryStoreOutlined,
  CloudDownloadOutlined,
} from "@material-ui/icons/";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Invoice } from "..";
import { useSelector } from "react-redux";

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

  link: {
    color: theme.palette.text.primary,
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
    paymentId,
    productsId,
    invoiceId,
  } = props;
  const classes = useStyles(useLocation());
  const location = useLocation();
  const { pathname } = location;
  const { profileid } = useParams();
  const data = useSelector((state) => state.currSelInvoiceReducer);

  return (
    <div className={classes.root}>
      <IconButton
        aria-label="back"
        onClick={handleBack}
        style={{
          background: /^\/product/.test(pathname)
            ? "rgba(0,0,0,.3)"
            : "inherit",
        }}
      >
        <ArrowBackRounded fontSize="inherit" />
      </IconButton>

      {/^\/cart/.test(pathname) && (
        <IconButton color="inherit" aria-label="delete" onClick={handleRemove}>
          <DeleteRounded fontSize="inherit" />
        </IconButton>
      )}

      {/^\/product/.test(pathname) && (
        <IconButton
          color="inherit"
          aria-label="store"
          onClick={handleStore}
          style={{ background: "rgba(0,0,0,.3)" }}
        >
          <LocalGroceryStoreOutlined />
        </IconButton>
      )}

      {(pathname === "/admin/allproducts" ||
        pathname === "/admin/categories" ||
        pathname === "/admin/sales" ||
        pathname === "/admin/spending" ||
        pathname === "/admin/invoices" ||
        pathname === "/loan" ||
        pathname === `/loan/${profileid}/payments` ||
        pathname === `/loan/${profileid}/products`) && (
        <div className={classes.flex}>
          {pathname !== "/admin/sales" &&
            pathname !== `/loan/${profileid}/products` &&
            pathname !== `/admin/invoices` && (
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

          {invoiceId && (
            <IconButton>
              <PDFDownloadLink
                className={classes.link}
                document={<Invoice data={data} />}
                fileName={`${data?.invoiceId}.pdf`}
              >
                <CloudDownloadOutlined />
              </PDFDownloadLink>
            </IconButton>
          )}

          {(id ||
            categoryId ||
            saleId ||
            spendingId ||
            paymentId ||
            productsId ||
            invoiceId) && (
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
