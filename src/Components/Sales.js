import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["City", "Sales"],
  ["France", 4260 ],
  ["Italy", 3970],
  ["Japan", 4260],
  ["Canada", 3970], 
];

export const options = {
  title: "Sales Distributions",
  pieHole: 0.4,
  is3D: false,
};

export default function Sales() {
  return (
    
    <Chart
      style={{"margin-left":"10px","width":"100%"}}
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}