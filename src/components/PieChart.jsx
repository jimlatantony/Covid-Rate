import React from "react";
import Plot from "react-plotly.js";
import { useSelector } from "react-redux";

const PieChart = () => {
  const data = useSelector((state) => state.data);
  const selectedState = useSelector((state) => state.selectedState);

  const getLatestData = (timeline) => {
    return timeline[timeline.length - 1]; 
  };

  const stateData = selectedState
    ? getLatestData(data.find((item) => item.state === selectedState).timeline)
    : data.reduce(
        (acc, item) => {
          const latest = getLatestData(item.timeline);
          return {
            totalCases: acc.totalCases + latest.totalCases,
            activeCases: acc.activeCases + latest.activeCases,
            recovered: acc.recovered + latest.recovered,
            deaths: acc.deaths + latest.deaths,
          };
        },
        { totalCases: 0, activeCases: 0, recovered: 0, deaths: 0 }
      );

  const pieData = [
    {
      values: [stateData.activeCases, stateData.recovered, stateData.deaths],
      labels: ["Active", "Recovered", "Deaths"],
      type: "pie",
    },
  ];

  return (
    <Plot data={pieData} layout={{ title: "COVID-19 Cases Distribution" }} />
  );
};

export default PieChart;
