import React, { useState } from "react";
import classes from "./Header.module.css";
import covid_logo from "../assets/images/covid_logo.png";
import dropdown from "../assets/images/dropdown.png";
import menuIcon from "../assets/images/menu-icon.png";
import closeIcon from "../assets/images/close.png";

import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
  
      <div className={classes.header_container}>
        <img src={covid_logo} alt="logo" className={classes.logo} />

        <nav className={show ? classes.showNav : classes.hideNav}>
          <img
            src={closeIcon}
            alt="Close"
            onClick={handleShow}
            className={classes.closeIcon}
          />
          <ul className={classes.nav_items_container}>
            <li>Home</li>

            <li>
              Pages{" "}
              <span>
                {" "}
                <img
                  src={dropdown}
                  alt="dropdown"
                  className={classes.down_arrow}
                />
              </span>
            </li>
            <li>
              Prevention{" "}
              <span>
                {" "}
                <img
                  src={dropdown}
                  alt="dropdown"
                  className={classes.down_arrow}
                />
              </span>
            </li>
            <li>Blog</li>
          </ul>
        </nav>

        <img
          src={menuIcon}
          alt="Menu Icon"
          className={classes.menu_icon}
          onClick={handleShow}
        />
      </div>
   
  );
};

export default Header;
