import React, { useEffect, useState } from "react";
import classes from "./HomePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setData, setSelectedState } from "../action";
import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import CovidMap from "../components/CovidMap";
import banner from "../assets/images/banner.png";
import Header from "../components/Header";

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const selectedState = useSelector((state) => state.selectedState);

  // const covidData = [
  //   {
  //     state: "Maharashtra",
  //     totalCases: 500000,
  //     activeCases: 100000,
  //     recovered: 380000,
  //     deaths: 20000,
  //   },
  //   {
  //     state: "Kerala",
  //     totalCases: 900000,
  //     activeCases: 50000,
  //     recovered: 240000,
  //     deaths: 10000,
  //   },
  //   // Add more state data here
  // ];
  const covidData = [
    {
      state: "Maharashtra",
      coordinates: { lat: 19.7515, lng: 75.7139 },
      timeline: [
        {
          date: "2020-01-01",
          totalCases: 1000,
          activeCases: 500,
          recovered: 400,
          deaths: 100,
        },
        {
          date: "2020-01-02",
          totalCases: 1500,
          activeCases: 700,
          recovered: 600,
          deaths: 200,
        },
      ],
    },
    {
      state: "Kerala",
      coordinates: { lat: 10.8505, lng: 76.2711 },
      timeline: [
        {
          date: "2020-01-01",
          totalCases: 500,
          activeCases: 300,
          recovered: 150,
          deaths: 50,
        },
        {
          date: "2020-01-02",
          totalCases: 800,
          activeCases: 500,
          recovered: 250,
          deaths: 100,
        },
      ],
    },
    {
      state: "Delhi",
      coordinates: { lat: 28.7041, lng: 77.1025 },
      timeline: [
        {
          date: "2020-01-01",
          totalCases: 800,
          activeCases: 400,
          recovered: 350,
          deaths: 50,
        },
        {
          date: "2020-01-02",
          totalCases: 1200,
          activeCases: 600,
          recovered: 500,
          deaths: 100,
        },
      ],
    },
    {
      state: "Tamil Nadu",
      coordinates: { lat: 11.1271, lng: 78.6569 },
      timeline: [
        {
          date: "2020-01-01",
          totalCases: 900,
          activeCases: 450,
          recovered: 400,
          deaths: 50,
        },
        {
          date: "2020-01-02",
          totalCases: 1300,
          activeCases: 600,
          recovered: 650,
          deaths: 50,
        },
      ],
    },
    {
      state: "Uttar Pradesh",
      coordinates: { lat: 26.8467, lng: 80.9462 },
      timeline: [
        {
          date: "2020-01-01",
          totalCases: 700,
          activeCases: 300,
          recovered: 350,
          deaths: 50,
        },
        {
          date: "2020-01-02",
          totalCases: 1100,
          activeCases: 500,
          recovered: 550,
          deaths: 50,
        },
      ],
    },
    {
      state: "West Bengal",
      coordinates: { lat: 22.9868, lng: 87.855 },
      timeline: [
        {
          date: "2020-01-01",
          totalCases: 600,
          activeCases: 300,
          recovered: 250,
          deaths: 50,
        },
        {
          date: "2020-01-02",
          totalCases: 1000,
          activeCases: 500,
          recovered: 400,
          deaths: 100,
        },
      ],
    },
    {
      state: "Karnataka",
      coordinates: { lat: 15.3173, lng: 75.7139 },
      timeline: [
        {
          date: "2020-01-01",
          totalCases: 950,
          activeCases: 450,
          recovered: 450,
          deaths: 50,
        },
        {
          date: "2020-01-02",
          totalCases: 1300,
          activeCases: 600,
          recovered: 600,
          deaths: 100,
        },
      ],
    },
    {
      state: "Gujarat",
      coordinates: { lat: 22.2587, lng: 71.1924 },
      timeline: [
        {
          date: "2020-01-01",
          totalCases: 750,
          activeCases: 350,
          recovered: 350,
          deaths: 50,
        },
        {
          date: "2020-01-02",
          totalCases: 1100,
          activeCases: 550,
          recovered: 450,
          deaths: 100,
        },
      ],
    },
    {
      state: "Rajasthan",
      coordinates: { lat: 27.0238, lng: 74.2179 },
      timeline: [
        {
          date: "2020-01-01",
          totalCases: 650,
          activeCases: 300,
          recovered: 300,
          deaths: 50,
        },
        {
          date: "2020-01-02",
          totalCases: 950,
          activeCases: 450,
          recovered: 400,
          deaths: 100,
        },
      ],
    },
    {
      state: "Madhya Pradesh",
      coordinates: { lat: 22.9734, lng: 78.6569 },
      timeline: [
        {
          date: "2020-01-01",
          totalCases: 600,
          activeCases: 250,
          recovered: 300,
          deaths: 50,
        },
        {
          date: "2020-01-02",
          totalCases: 900,
          activeCases: 400,
          recovered: 400,
          deaths: 100,
        },
      ],
    },
  ];

  useEffect(() => {
    dispatch(setData(covidData));
  }, [dispatch]);

  const handleStateChange = (e) => {
    dispatch(setSelectedState(e.target.value));
  };

  console.log(selectedState);

  return (
    <div>
      <Header />
      <section className={classes.banner_section}>
        <div className={classes.banner_img}>
          <div className={classes.banner_content}>
            <div className={classes.banner_content_msg}>
              <h1>
                Health is our highest priority.
                Stay home if you feel unwell.
              </h1>
            </div>
            <div className={classes.banner_img}>
              <img src={banner} alt="banner" className={classes.phone} />
            </div>
          </div>
        </div>
      </section>

      <section className={classes.Cases_Overview}>
        COVID-19 Cases Overview
        <h1>COVID-19 Tracker India</h1>
        <label htmlFor="state-filter">Filter by State: </label>
        <select id="state-filter" className={classes.selectBox}  onChange={handleStateChange}>
          <option value="">All States</option>
          {data.map((stateData) => (
            <option key={stateData.state} value={stateData.state}>
              {stateData.state}
            </option>
          ))}
        </select>
        <div>
        <PieChart data={data} selectedState={selectedState} />
        <LineChart data={data} selectedState={selectedState} />
        <CovidMap data={data} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
