import React, { useEffect } from "react";
import NumberFormat from "react-number-format";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { HighChartStock, UpperAppBar } from "../components";
import Highcharts from "highcharts/highstock";
import { useDispatch, useSelector } from "react-redux";
import { salesAction } from "../actions/salesAction";
import { spendingsAction } from "../actions/spendingsAction";
import { useTheme } from "@material-ui/styles";

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
  },

  salesSubtitle: {
    color: theme.palette.success["light"],
    margin: 0,
  },

  salesTitle: {
    // color: theme.palette.success["dark"],
    fontWeight: 700,
    fontSize: 22,
  },

  earningTitle: {
    color: theme.palette.success["dark"],
    fontWeight: 700,
    fontSize: 22,
  },

  spendingsSubtitle: {
    color: theme.palette.error["light"],
    margin: 0,
  },

  spendingsTitle: {
    color: theme.palette.error["dark"],
    fontWeight: 700,
    fontSize: 22,
  },
}));

export default function WalletScreen() {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { sales, error } = useSelector((state) => state.salesReducer);
  const { spendings } = useSelector((state) => state.spendingsReducer);
  const theme = useTheme();

  useEffect(() => {
    dispatch(salesAction());
    dispatch(spendingsAction());
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
    credits: {
      enabled: false,
    },
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

  const darkOptions = {
    ...options,
    colors: [
      "#2b908f",
      "#90ee7e",
      "#f45b5b",
      "#7798BF",
      "#aaeeee",
      "#ff0066",
      "#eeaaee",
      "#55BF3B",
      "#DF5353",
      "#7798BF",
      "#aaeeee",
    ],
    chart: {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
        stops: [
          [0, "#2a2a2b"],
          [1, "#3e3e40"],
        ],
      },
      style: {
        fontFamily: "'Unica One', sans-serif",
      },
      plotBorderColor: "#606063",
    },
    title: {
      ...options.title,
      style: {
        color: "#E0E0E3",
        textTransform: "uppercase",
        fontSize: "20px",
      },
    },
    subtitle: {
      style: {
        color: "#E0E0E3",
        textTransform: "uppercase",
      },
    },
    xAxis: {
      gridLineColor: "#707073",
      labels: {
        style: {
          color: "#E0E0E3",
        },
      },
      lineColor: "#707073",
      minorGridLineColor: "#505053",
      tickColor: "#707073",
      title: {
        style: {
          color: "#A0A0A3",
        },
      },
    },
    yAxis: {
      gridLineColor: "#707073",
      labels: {
        style: {
          color: "#E0E0E3",
        },
      },
      lineColor: "#707073",
      minorGridLineColor: "#505053",
      tickColor: "#707073",
      tickWidth: 1,
      title: {
        style: {
          color: "#A0A0A3",
        },
      },
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      style: {
        color: "#F0F0F0",
      },
    },
    plotOptions: {
      series: {
        dataLabels: {
          color: "#F0F0F3",
          style: {
            fontSize: "13px",
          },
        },
        marker: {
          lineColor: "#333",
        },
      },
      boxplot: {
        fillColor: "#505053",
      },
      candlestick: {
        lineColor: "white",
      },
      errorbar: {
        color: "white",
      },
    },
    legend: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      itemStyle: {
        color: "#E0E0E3",
      },
      itemHoverStyle: {
        color: "#FFF",
      },
      itemHiddenStyle: {
        color: "#606063",
      },
      title: {
        style: {
          color: "#C0C0C0",
        },
      },
    },

    labels: {
      style: {
        color: "#707073",
      },
    },
    drilldown: {
      activeAxisLabelStyle: {
        color: "#F0F0F3",
      },
      activeDataLabelStyle: {
        color: "#F0F0F3",
      },
    },
    navigation: {
      buttonOptions: {
        symbolStroke: "#DDDDDD",
        theme: {
          fill: "#505053",
        },
      },
    },
    // scroll charts
    rangeSelector: {
      ...options.rangeSelector,
      buttonTheme: {
        fill: "#505053",
        stroke: "#000000",
        style: {
          color: "#CCC",
        },
        states: {
          hover: {
            fill: "#707073",
            stroke: "#000000",
            style: {
              color: "white",
            },
          },
          select: {
            fill: "#000003",
            stroke: "#000000",
            style: {
              color: "white",
            },
          },
        },
      },
      inputBoxBorderColor: "#505053",
      inputStyle: {
        backgroundColor: "#333",
        color: "silver",
      },
      labelStyle: {
        color: "silver",
      },
    },
    navigator: {
      handles: {
        backgroundColor: "#666",
        borderColor: "#AAA",
      },
      outlineColor: "#CCC",
      maskFill: "rgba(255,255,255,0.1)",
      series: {
        color: "#7798BF",
        lineColor: "#A6C7ED",
      },
      xAxis: {
        gridLineColor: "#505053",
      },
    },
    scrollbar: {
      barBackgroundColor: "#808083",
      barBorderColor: "#808083",
      buttonArrowColor: "#CCC",
      buttonBackgroundColor: "#606063",
      buttonBorderColor: "#606063",
      rifleColor: "#FFF",
      trackBackgroundColor: "#404043",
      trackBorderColor: "#404043",
    },
  };

  const allSales = sales?.reduce((acc, curr) => acc + curr.soldPrice, 0);
  const allSpendings = spendings.reduce((acc, curr) => acc + curr.spending, 0);
  const earning = sales?.reduce(
    (acc, curr) => acc + (curr.soldPrice - curr.price),
    0
  );

  const balance = Number(allSales - allSpendings);

  return (
    <>
      <UpperAppBar handleBack={handleBack} />
      {error && <div>{error}</div>}
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
              value={balance}
              displayType={"text"}
              thousandSeparator={true}
              suffix={"DH"}
              className={classes.title}
            />
          </Typography>
        </Paper>
        <Paper className={classes.paper}>
          <div className={classes.flex}>
            <Typography variant="h6" className={classes.title}>
              Sales
            </Typography>
            <Typography className={classes.salesTitle} variant="subtitle2">
              <NumberFormat
                value={allSales}
                displayType={"text"}
                thousandSeparator={true}
                suffix={"DH"}

                //className={classes.title}
              />
            </Typography>
          </div>
        </Paper>
        <Paper className={classes.paper}>
          <div className={classes.flex}>
            <Typography className={classes.title} variant="h6">
              Spendings
            </Typography>
            {spendings && (
              <Typography
                className={classes.spendingsTitle}
                variant="subtitle2"
              >
                <NumberFormat
                  value={allSpendings}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={"DH"}
                  //className={classes.title}
                />
              </Typography>
            )}
          </div>
        </Paper>
        <Paper className={classes.paper}>
          <div className={classes.flex}>
            <Typography className={classes.title} variant="h6">
              Earnings
            </Typography>
            <Typography className={classes.earningTitle} variant="subtitle2">
              <NumberFormat
                value={earning}
                displayType={"text"}
                thousandSeparator={true}
                suffix={"DH"}
              />
            </Typography>
          </div>
        </Paper>
        {/* <Paper className={classes.details}>
          <Doughnut />
        </Paper> */}

        <HighChartStock
          options={theme.palette.type === "light" ? options : darkOptions}
        />
      </div>
    </>
  );
}
