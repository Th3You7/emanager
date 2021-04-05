import React, { useEffect } from "react";
import NumberFormat from "react-number-format";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { HighChartStock, UpperAppBar } from "../components";
import Highcharts from "highcharts/highstock";
import { useDispatch, useSelector } from "react-redux";
import { salesAction } from "../actions/salesAction";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "95%",
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
  const dispatch = useDispatch();
  const { sales, loading, error } = useSelector((state) => state.salesReducer);

  useEffect(() => {
    dispatch(salesAction());
  }, [dispatch]);

  const handleBack = () => {
    history.push("/admin");
  };

  const data = [
    ...sales.map((sale) => [
      new Date(sale.createdAt).getTime(),
      sale.soldPrice - sale.price,
    ]),
  ];

  const options = {
    rangeSelector: {
      selected: 1,
    },
    title: {
      text: "Earnings",
      align: "left",
      style: {
        fontSize: "20px",
        color: "#5c5c5c",
      },
    },
    series: [
      {
        name: "Earning",
        data: data,
        dataGrouping: {
          approximation: "sum",
          forced: true,
          groupAll: true,
          units: [["day", [1]]],
        },
        color: "green",
        type: "areaspline",
        threshold: null,
        tooltip: {
          valueDecimals: 2,
        },
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [1, Highcharts.getOptions().colors[1]],
            [
              1,
              Highcharts.color(Highcharts.getOptions().colors[1])
                .setOpacity(0)
                .get("rgba"),
            ],
          ],
        },
      },
    ],
  };

  if (error) return <div>{error}</div>;

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
            <Typography className={classes.salesTitle} variant="subtitle2">
              <NumberFormat
                value={sales.reduce((acc, curr) => acc + curr.soldPrice, 0)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"MAD"}
                className={classes.title}
              />
            </Typography>

            <Typography className={classes.spendingsTitle} variant="subtitle2">
              <NumberFormat
                value={2456}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"MAD"}
                className={classes.title}
              />
            </Typography>
          </div>
        </Paper>
        {/* <Paper className={classes.details}>
          <Doughnut />
        </Paper> */}

        <HighChartStock options={options} />
      </div>
    </>
  );
}
