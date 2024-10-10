
import React from 'react';
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';

const PieChart = () => {
  const data = useSelector((state) => state.data);
  const selectedState = useSelector((state) => state.selectedState);

  const stateData = selectedState
    ? data.find((item) => item.state === selectedState)
    : data.reduce(
        (acc, item) => ({
          totalCases: acc.totalCases + item.totalCases,
          activeCases: acc.activeCases + item.activeCases,
          recovered: acc.recovered + item.recovered,
          deaths: acc.deaths + item.deaths,
        }),
        { totalCases: 0, activeCases: 0, recovered: 0, deaths: 0 }
      );

  const pieData = [
    {
      values: [stateData.activeCases, stateData.recovered, stateData.deaths],
      labels: ['Active', 'Recovered', 'Deaths'],
      type: 'pie',
    },
  ];

  return <Plot data={pieData} layout={{ title: 'COVID-19 Cases Distribution' }} />;
};

export default PieChart;
