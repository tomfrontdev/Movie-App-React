import React from "react";
import classes from "../components/Header.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { GiHamburgerMenu as Hamburger } from "react-icons/gi";

const DropdownModal = () => {
  const [showMenu, setshowMenu] = useState(false);
  const isdayModeActive = useSelector((state) => state.movies.dayMode);

  const handleToggleDropDown = () => {
    setshowMenu(!showMenu);
  };

  const darkorlightMode = isdayModeActive ? "black" : "white";

  return (
    <React.Fragment>
      <div className={classes.hamburgerContainer + " " + classes.hidden}>
        <Hamburger
          onClick={handleToggleDropDown}
          className={classes.hamburger}
          style={{ color: darkorlightMode }}
        />
      </div>
      <div
        className={`${classes.dropdown} ${
          showMenu ? classes.showMenu : classes.hidden
        }`}
        style={{ backgroundColor: isdayModeActive ? "white" : "black" }}
      >
        <ul className={classes.dropdownlist + " " + classes.hidden}>
          <AiOutlineClose
            onClick={handleToggleDropDown}
            className={classes.closeIcon}
            style={{ color: darkorlightMode }}
          />
          <li className={classes.headerlink}>
            <NavLink
              className={classes.navlink}
              style={{ color: darkorlightMode }}
              to="/welcome"
            >
              Strona Główna
            </NavLink>
          </li>
          <li className={classes.headerlink}>
            <NavLink
              className={classes.navlink}
              style={{ color: darkorlightMode }}
              to="/favoritemovies"
            >
              Lista ulubionych filmów
            </NavLink>
          </li>
          <li className={classes.headerlink}>
            <NavLink
              className={classes.navlink}
              style={{ color: darkorlightMode }}
              to="/addfilm"
            >
              Dodaj film
            </NavLink>
          </li>
          <li className={classes.headerlink}>
            <NavLink
              className={classes.navlink}
              style={{ color: darkorlightMode }}
              to="/addedfilms"
            >
              Lista Dodanych Filmów
            </NavLink>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default DropdownModal;
