import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Highcharts from "highcharts/highstock";
import { HighChart, HighChartStock, UpperAppBar } from "../components";
import { makeStyles } from "@material-ui/core";
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
  const { sales, error, fetching } = useSelector((state) => state.salesReducer);
  const { categories } = useSelector((state) => state.categoriesReducer);
  useEffect(() => {
    dispatch(salesAction());
  }, [dispatch]);

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

  const salesData = [
    ...sales.map((sale) => [
      new Date(sale.createdAt).getTime(),
      sale.soldPrice,
    ]),
  ];

  const salesOptions = {
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

  return (
    <div>
      <UpperAppBar handleBack={handleBack} />
      <div className={classes.container}>
        <HighChart options={options} />
        <HighChartStock options={salesOptions} />
      </div>
    </div>
  );
}
