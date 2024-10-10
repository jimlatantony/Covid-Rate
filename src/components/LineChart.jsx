import React from 'react';
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';

const LineChart = () => {
  const data = useSelector((state) => state.data);
  const selectedState = useSelector((state) => state.selectedState);

  // Get time-series data for the selected state or all states
  let timeline = [];
  if (selectedState) {
    const stateData = data.find((item) => item.state === selectedState);
    timeline = stateData ? stateData.timeline : [];
  } else {
    // Handle the case when no specific state is selected (aggregate data from all states)
    timeline = data.reduce((acc, stateData) => {
      return acc.concat(stateData.timeline);
    }, []);
  }

  const dates = timeline.map((item) => item.date);

  const lineData = [
    {
      x: dates,
      y: timeline.map((item) => item.totalCases),
      type: 'scatter',
      mode: 'lines',
      name: 'Total Cases',
    },
    {
      x: dates,
      y: timeline.map((item) => item.activeCases),
      type: 'scatter',
      mode: 'lines',
      name: 'Active Cases',
    },
    {
      x: dates,
      y: timeline.map((item) => item.recovered),
      type: 'scatter',
      mode: 'lines',
      name: 'Recovered',
    },
    {
      x: dates,
      y: timeline.map((item) => item.deaths),
      type: 'scatter',
      mode: 'lines',
      name: 'Deaths',
    },
  ];

  return <Plot data={lineData} layout={{ title: 'COVID-19 Cases Over Time' }} />;
};

export default LineChart;
