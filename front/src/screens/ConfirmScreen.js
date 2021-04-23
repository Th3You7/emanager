import React, { useCallback, useEffect, useState } from "react";
import { UpperAppBar } from "../components";
import {
  Button,
  CircularProgress,
  makeStyles,
  MobileStepper,
  Snackbar,
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
import { Controller, useForm } from "react-hook-form";

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
    marginBottom: theme.spacing(2),
  },
}));

export default function ConfirmScreen() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cartReducer);
  const { result, fetching, error } = useSelector(
    (state) => state.addSalesReducer
  );

  //!New
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 3;
  const { control } = useForm();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack0 = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    if (result) {
      setOpen(true);
    }
  }, [setOpen, result]);

  const handleClose = useCallback((event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }, []);

  const handleBack = () => {
    dispatch(resetSales());
    history.replace("/cart");
  };

  const handleClick = () => {
    dispatch(addSalesAction(products));
    dispatch(removeAllAction());
    dispatch(confirmSaleAction(products));
  };

  const total = products.reduce((acc, curr) => acc + Number(curr.soldPrice), 0);
  const earning = () => {
    const prices = products.reduce((acc, curr) => acc + Number(curr.price), 0);
    return total - prices;
  };

  const titles = () => ["Payment Method", "Credits", "Confirm"];

  const paymentMethod = () => {
    return (
      <>
        <Typography variant="h5" gutterBottom>
          {titles()[0]}
        </Typography>
        <Controller
          name="paymentMethod"
          defaultValue={{ value: "cash", label: "Cash" }}
          control={control}
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
          as={Select}
        />
      </>
    );
  };

  const credits = () => {
    return (
      <>
        <Typography variant="h5" gutterBottom>
          {titles()[1]}
        </Typography>
      </>
    );
  };

  const confirm = () => {
    return (
      <>
        <Typography variant="h5" gutterBottom>
          {titles()[2]}
        </Typography>
        <div>
          <p>
            Products: <strong>{products.length}</strong>
          </p>
          <p>
            Total: <strong>{total}DH</strong>
          </p>
          <p>
            Earning: <strong>{earning()}DH</strong>
          </p>
          {!fetching && !result && (
            <Button
              className={classes.btn}
              variant="contained"
              onClick={handleClick}
            >
              Confirm
            </Button>
          )}
          {fetching && <CircularProgress />}
          {error && (
            <Typography className={classes.failed}>
              Error has occured
            </Typography>
          )}
          <Snackbar open={open} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Sales Saved successfully!
            </Alert>
          </Snackbar>
        </div>
      </>
    );
  };

  const content = (step) => {
    switch (step) {
      case 0:
        return paymentMethod();

      case 1:
        return credits();

      case 2:
        return confirm();

      default:
        break;
    }
  };

  return (
    <>
      <UpperAppBar handleBack={handleBack} />
      <div className={classes.container}>{content(activeStep)}</div>
      {((!error && !result) || !result) && (
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
              onClick={handleBack0}
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
    </>
  );
}
