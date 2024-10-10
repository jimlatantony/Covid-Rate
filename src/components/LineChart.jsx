import React from 'react';
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';

const LineChart = () => {
  const data = useSelector((state) => state.data);
  const selectedState = useSelector((state) => state.selectedState);

  const stateData = selectedState
    ? data.find((item) => item.state === selectedState)
    : data;

  const dates = ['2020-01-01', '2020-01-02', '2020-01-03']; // Dummy dates
  const lineData = [
    {
      x: dates,
      y: stateData.map((item) => item.totalCases),
      type: 'scatter',
      mode: 'lines',
      name: 'Total Cases',
    },
    {
      x: dates,
      y: stateData.map((item) => item.activeCases),
      type: 'scatter',
      mode: 'lines',
      name: 'Active Cases',
    },
    {
      x: dates,
      y: stateData.map((item) => item.recovered),
      type: 'scatter',
      mode: 'lines',
      name: 'Recovered',
    },
    {
      x: dates,
      y: stateData.map((item) => item.deaths),
      type: 'scatter',
      mode: 'lines',
      name: 'Deaths',
    },
  ];

  return <Plot data={lineData} layout={{ title: 'COVID-19 Cases Over Time' }} />;
};

export default LineChart;
