import React from "react";
import NumberFormat from "react-number-format";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { Doughnut, MultiAxisLine, UpperAppBar } from "../components";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "90%",
    margin: theme.spacing(0, "auto"),
  },

  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },

  title: {
    fontWeight: 700,
  },

  subtitle: {
    color: theme.palette.primary["light"],
  },

  details: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },

  progress: {
    padding: theme.spacing(2),
  },

  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },

  salesSubtitle: {
    color: theme.palette.success["light"],
    margin: 0,
  },

  salesTitle: {
    color: theme.palette.success["dark"],
    fontWeight: 700,
  },

  spendingsSubtitle: {
    color: theme.palette.error["light"],
    margin: 0,
  },

  spendingsTitle: {
    color: theme.palette.error["dark"],
    fontWeight: 700,
  },
}));

export default function WalletScreen() {
  const history = useHistory();
  const classes = useStyles();
  const handleBack = () => {
    history.push("/admin");
  };

  return (
    <>
      <UpperAppBar handleBack={handleBack} />
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <Typography
            variant="h6"
            component="h2"
            className={classes.subtitle}
            align="center"
          >
            Total Balance
          </Typography>
          <Typography variant="h5" component="h3" align="center">
            <NumberFormat
              value={2456981}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"MAD"}
              className={classes.title}
            />
          </Typography>
          <div className={classes.flex}>
            <div>
              <Typography className={classes.salesTitle} variant="subtitle2">
                <NumberFormat
                  value={24569}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"MAD"}
                  className={classes.title}
                />
              </Typography>
              <p className={classes.salesSubtitle}>Sales </p>
            </div>
            <div>
              <Typography
                className={classes.spendingsTitle}
                variant="subtitle2"
              >
                <NumberFormat
                  value={2456}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"MAD"}
                  className={classes.title}
                />
              </Typography>
              <p className={classes.spendingsSubtitle}>Spending</p>
            </div>
          </div>
        </Paper>
        <Paper className={classes.details}>
          <Doughnut />
        </Paper>
        <Paper className={classes.progress}>
          <MultiAxisLine />
        </Paper>
      </div>
    </>
  );
}
