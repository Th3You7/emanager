import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart() {
  const data = {
    labels: ["Sales", "Credits", "Spending"],
    datasets: [
      {
        data: [80, 15, 5],
        backgroundColor: [
          "rgba(0,161,82, 0.8)",
          "rgba(178,163,0, 0.8)",
          "rgba(178,16,47, 0.8)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <>
      <Doughnut data={data} option={options} height={120} />
    </>
  );
}
