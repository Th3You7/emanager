import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Highcharts from "highcharts/highstock";
import { HighChart, HighChartStock, UpperAppBar } from "../components";
import { makeStyles, useTheme } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { salesAction } from "../actions/salesAction";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0, 1),
  },

  paper: {
    margin: theme.spacing(0, 0, 2),
  },
}));

export default function DashboardScreen() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { sales } = useSelector((state) => state.salesReducer);
  const { categories } = useSelector((state) => state.categoriesReducer);
  useEffect(() => {
    dispatch(salesAction());
  }, [dispatch]);
  const theme = useTheme();
  const handleBack = () => {
    history.push("/admin");
  };

  const data = [
    ...categories
      .map((category) =>
        sales.filter(
          (sale) => sale.category.toLowerCase() === category.name.toLowerCase()
        )
      )
      .sort((a, b) => b.length - a.length)
      .map((x, i) => {
        if (x.length < 1 || i === 10) return null;
        return { name: x[0].category, y: x.length };
      }),
  ];
  const salesData = [
    ...sales.map((sale) => [
      new Date(sale.createdAt).getTime(),
      sale.soldPrice,
    ]),
  ];

  const options = {
    credits: {
      enabled: false,
    },
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      height: 250,
    },
    title: {
      text: "Sales Analytic",
      align: "left",
      style: {
        fontSize: "20px",
        color: "#5c5c5c",
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.y}</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        size: 125,
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        minPointSize: 50,
        name: "Products",
        colorByPoint: true,
        data: data,
      },
    ],
  };

  const salesOptions = {
    credits: {
      enabled: false,
    },
    rangeSelector: {
      selected: 1,
    },
    title: {
      text: "All Sales",
      align: "left",
      style: {
        fontSize: "20px",
        color: "#5c5c5c",
      },
    },
    series: [
      {
        name: "Sales",
        data: salesData,
        color: "black",
        type: "areaspline",
        threshold: null,
        dataGrouping: {
          approximation: "sum",
          forced: true,
          groupAll: true,
          units: [["day", [1]]],
        },
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
            [0, Highcharts.getOptions().colors[0]],
            [
              1,
              Highcharts.color(Highcharts.getOptions().colors[0])
                .setOpacity(0)
                .get("rgba"),
            ],
          ],
        },
      },
    ],
  };

  const darkSalesOptions = {
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
      ...salesOptions.title,
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
      ...salesOptions.rangeSelector,
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

  const darkOptions = {
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
      ...options.chart,
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

    tooltip: {
      ...options.tooltip,
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      style: {
        color: "#F0F0F0",
      },
    },
    plotOptions: {
      ...options.plotOptions,
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
  };

  return (
    <div>
      <UpperAppBar handleBack={handleBack} />
      <div className={classes.container}>
        <HighChart
          options={
            theme.palette.type === "light"
              ? options
              : { ...options, ...darkOptions }
          }
        />
        <HighChartStock
          options={
            theme.palette.type === "light"
              ? salesOptions
              : { ...salesOptions, ...darkSalesOptions }
          }
        />
      </div>
    </div>
  );
}
