import React from "react";
import classes from "../pages/HomePage.module.css";
import logo from "../src/assets/images/logo.png";
import search from "../src/assets/images/search_icon.png";
import shopping from "../src/assets/images/shopping_icon.png";
import dropdown from "../src/assets/images/dropdown.png";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className={classes.header_container}>
        <div>
          <img src={logo} alt="logo" className={classes.logo} />
        </div>
        <div>
          <nav className={classes.nav_menu}>
            <ul>
              <li>Home</li>

              <li>
                Menu{" "}
                <span>
                  {" "}
                  <img
                    src={dropdown}
                    alt="dropdown"
                    className={classes.dropdown}
                  />
                </span>
              </li>
              <li>
                Services{" "}
                <span>
                  {" "}
                  <img
                    src={dropdown}
                    alt="dropdown"
                    className={classes.dropdown}
                  />
                </span>
              </li>
              <li>Offers</li>
            </ul>
          </nav>
        </div>
        <div className={classes.icon_container}>
          <img src={search} alt="search" className={classes.search} />
          <img src={shopping} alt="shopping" className={classes.shopping} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
