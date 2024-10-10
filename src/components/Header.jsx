import React, { useState } from 'react'
import classes from "./Header.module.css";
import covid_logo from "../assets/images/covid_logo.png";
import search from "../assets/images/search_icon.png";
import dropdown from "../assets/images/dropdown.png";
import phone from "../assets/images/phone_icon.png";
import menuIcon from "../assets/images/menu-icon.png";
import { Link } from "react-router-dom";

const Header = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
      };
  return (
    <div>
        <div className={classes.header_container}>
        <div>
          <img src={covid_logo} alt="logo" className={classes.logo} />
        </div>
        <div>
          <nav className={classes.nav_menu}>
            <ul>
              <li>Home</li>

              <li>
                Pages{" "}
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
                Prevention{" "}
                <span>
                  {" "}
                  <img
                    src={dropdown}
                    alt="dropdown"
                    className={classes.dropdown}
                  />
                </span>
              </li>
              <li>Blog</li>
            </ul>
          </nav>
        </div>
        <div className={classes.icon_container}>
          <img src={search} alt="search" className={classes.search} />
         
          <div className={classes.contact_button}>
            {" "}
            <img src={phone} alt="phone" className={classes.phone} /> Contact
          </div>
        </div>
        <img
          src={menuIcon}
          alt="Menu Icon"
          className={classes.menu_icon}
          onClick={handleShow}
        />
      </div>
    </div>
  )
}

export default Header
