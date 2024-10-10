import React, { useState } from "react";
import classes from "./HomePage.module.css";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { setData, setSelectedState } from '../action';

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const selectedState = useSelector((state) => state.selectedState);

 
  return (
    <div>
     <Header />
      <section className={classes.banner_section}>
        <div className={classes.banner_img}></div>
      </section>

      <section className={classes.Cases_Overview}>
      COVID-19 Cases Overview

      </section>
     
    </div>
  );
};

export default HomePage;
