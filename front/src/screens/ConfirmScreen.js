import React, { useCallback, useEffect, useState } from "react";
import { UpperAppBar } from "../components";
import {
  Button,
  CircularProgress,
  makeStyles,
  MobileStepper,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  addSalesAction,
  confirmSaleAction,
  resetSales,
} from "../actions/salesAction";
import { removeAllAction } from "../actions/cartAction";
import { Alert } from "@material-ui/lab";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import Select from "react-select";

import {
  loanAction,
  loanPaymentsAddAction,
  loanProductsAddAction,
} from "../actions/loanAction";
import { invoiceAction, resetInvoiceAction } from "../actions/invoiceAction";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  btn: {
    marginTop: theme.spacing(3),
  },
  failed: {
    color: theme.palette.error["dark"],
    fontSize: theme.spacing(2.5),
    margin: theme.spacing(4, 0),
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
  loanLink: {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
}));

export default function ConfirmScreen() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  //*Invoice Data
  const [payment, setPayment] = useState({
    value: "cash",
    label: "Cash",
  });

  const [clientInfo, setClientInfo] = useState({
    adress: "",
    name: "",
    id: "",
  });
  const [advance, setAdvance] = useState(0);
  const { products } = useSelector((state) => state.cartReducer);
  const addSales = useSelector((state) => state.addSalesReducer);
  const invoice = useSelector((state) => state.invoiceReducer);
  const { loans } = useSelector((state) => state.loanReducer);

  //!New
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    if (addSales.result && invoice.invoice) {
      setOpen(true);
    }
  }, [setOpen, addSales.result, invoice.invoice]);

  useEffect(() => {
    if (activeStep === 1 && payment.value === "credit") dispatch(loanAction());
  }, [dispatch, activeStep, payment.value]);

  const maxSteps = 3;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleStepperBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleClose = useCallback((event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }, []);

  const handleBack = () => {
    dispatch(resetSales());
    dispatch(resetInvoiceAction());
    history.replace("/cart");
  };

  const total = products.reduce(
    (acc, curr) =>
      acc +
      Number(curr.soldPrice) *
        Object.keys(curr.size).reduce((a, c) => a + curr.size[c], 0),
    0
  );
  const earning = () => {
    const prices = products.reduce(
      (acc, curr) =>
        acc +
        Number(curr.price) *
          Object.keys(curr.size).reduce((a, c) => a + curr.size[c], 0),
      0
    );
    return total - prices;
  };

  const invoiceData = {
    client: clientInfo,
    products,
    paymentMethod: payment.value,
    advance,
    total,
  };

  const handleClick = () => {
    if (!clientInfo.name) return;
    dispatch(addSalesAction(products));
    dispatch(confirmSaleAction(products));
    advance &&
      dispatch(
        loanPaymentsAddAction({ profileid: clientInfo.id, payment: advance })
      );
    advance &&
      dispatch(loanProductsAddAction({ products, profileid: clientInfo.id }));
    dispatch(invoiceAction(invoiceData));
    dispatch(removeAllAction());
  };

  const borrowersOptions = loans.map((va) => {
    return {
      value: va.name,
      id: va._id,
      label: va.name.replace(/\b\w/g, (l) => l.toUpperCase()),
    };
  });

  const paymentMethod = () => {
    return (
      <>
        <Typography variant="h5" className={classes.title}>
          Payment Method
        </Typography>

        <Select
          name="paymentMethod"
          defaultValue={payment}
          className={classes.input}
          options={[
            { value: "cash", label: "Cash" },
            { value: "credit", label: "Credit" },
          ]}
          styles={{
            option: (provided, state) => ({
              ...provided,
              color: state.isFocused || state.isSelected ? "white" : "black",
            }),
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "#333333",
              primary: "#0c0c0c",
            },
          })}
          closeMenuOnSelect={true}
          placeholder="Choose payment method..."
          onChange={(e) => setPayment(e)}
        />
      </>
    );
  };

  const client = () => {
    return (
      <div>
        <Typography className={classes.title} variant="h5">
          Client's Infos
        </Typography>
        {payment.value === "cash" ? (
          <>
            <TextField
              className={classes.input}
              id="client-name"
              label="Client Name"
              name="clientName"
              defaultValue={clientInfo.name}
              fullWidth
              variant="outlined"
              onChange={(e) =>
                setClientInfo({
                  ...clientInfo,
                  name: e.target.value,
                })
              }
            />
            <TextField
              className={classes.input}
              id="client-adress"
              label="Client Adress"
              name="clientAdress"
              defaultValue={clientInfo.adress}
              fullWidth
              variant="outlined"
              onChange={(e) =>
                setClientInfo({ ...clientInfo, adress: e.target.value })
              }
            />
          </>
        ) : (
          <>
            <Select
              name="client"
              defaultValue=""
              className={classes.input}
              options={borrowersOptions}
              styles={{
                option: (provided, state) => ({
                  ...provided,
                  color:
                    state.isFocused || state.isSelected ? "white" : "black",
                }),
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "#333333",
                  primary: "#0c0c0c",
                },
              })}
              closeMenuOnSelect={true}
              placeholder="Select borrower..."
              onChange={(e) => setClientInfo({ name: e.value, id: e.id })}
            />
            <TextField
              className={classes.input}
              id="advance"
              label="Advance"
              name="advance"
              defaultValue={advance}
              fullWidth
              variant="outlined"
              onChange={(e) => setAdvance(e.target.value)}
            />

            <Typography
              component={Link}
              to={{
                pathname: "/loan/add",
                state: {
                  fromConfirm: true,
                },
              }}
              className={classes.loanLink}
            >
              create a loan account ?
            </Typography>
          </>
        )}
      </div>
    );
  };

  const confirm = () => {
    return (
      <>
        {!invoice.invoice && (
          <>
            <Typography variant="h5" gutterBottom>
              Confirm Invoice
            </Typography>
            <div>
              <p>
                Client: <strong>{clientInfo.name}</strong>,{" "}
                <strong>{clientInfo.adress}</strong>
              </p>
            </div>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Qty</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell align="right">Unit Price</TableCell>
                    <TableCell align="right">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((row) => (
                    <TableRow key={row._id} style={{ fontWeight: 400 }}>
                      <TableCell style={{ fontWeight: 400 }}>
                        {Object.keys(row.size).reduce(
                          (acc, curr) => acc + row.size[curr],
                          0
                        )}
                      </TableCell>
                      <TableCell style={{ fontWeight: 400 }}>
                        {row.name}
                      </TableCell>
                      <TableCell align="right" style={{ fontWeight: 400 }}>
                        {row.soldPrice}
                      </TableCell>
                      <TableCell align="right" style={{ fontWeight: 400 }}>
                        {Object.keys(row.size).reduce(
                          (acc, curr) => acc + row.size[curr],
                          0
                        ) * row.soldPrice}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">Total:</TableCell>
                    <TableCell align="right">{total}DH</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">Earning:</TableCell>
                    <TableCell align="right">{earning()}DH</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
        {!invoice.loading && !invoice.invoice && (
          <Button
            className={classes.btn}
            variant="contained"
            onClick={handleClick}
          >
            Confirm
          </Button>
        )}

        {invoice.loading && <CircularProgress />}
        {invoice.error && (
          <Typography className={classes.failed}>Error has occured</Typography>
        )}
        <Snackbar open={open} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Sales Saved successfully!
          </Alert>
        </Snackbar>
      </>
    );
  };

  const content = (step) => {
    switch (step) {
      case 0:
        return paymentMethod();

      case 1:
        return client();

      case 2:
        return confirm();

      default:
        break;
    }
  };

  return (
    <>
      <UpperAppBar handleBack={handleBack} />

      {!invoice.error && !invoice.invoice && (
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleStepperBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      )}
      <div className={classes.container}>{content(activeStep)}</div>
    </>
  );
}
