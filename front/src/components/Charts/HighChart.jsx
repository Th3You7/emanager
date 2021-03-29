import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";

export default function CustomizedTables({ options }) {
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}
