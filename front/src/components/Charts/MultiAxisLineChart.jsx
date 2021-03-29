import React from "react";
import { Line } from "react-chartjs-2";

export default function MultiAxisLineChart() {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: "rgb(0,161,82)",
        borderColor: "rgba(0,161,82, 0.2)",
        yAxisID: "y-axis-1",
      },
      {
        label: "#Votes",
        data: [1, 2, 1, 1, 2, 2],
        fill: false,
        backgroundColor: "rgb(178,163,0)",
        borderColor: "rgba(178,163,0, 0.2)",
        yAxisID: "y-axis-1",
      },
      {
        label: "#No Votes",
        data: [10, 20, 8, 12, 12, 15],
        fill: false,
        backgroundColor: "rgb(178,16,47)",
        borderColor: "rgba(178,16,47, 0.2)",
        yAxisID: "y-axis-1",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
        },
        {
          type: "linear",
          display: false,
          position: "right",
          id: "y-axis-2",
          gridLines: {
            drawOnArea: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Line data={data} options={options} height={250} />
    </>
  );
}
