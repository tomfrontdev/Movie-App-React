import React from "react";
import classes from "../components/Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <ul>
          <li>
            <NavLink
              activeClassName={classes.active}
              className={classes.navlink}
              to="/welcome"
            >
              Strona Główna
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes.active}
              className={classes.navlink}
              to="/favoritemovies"
            >
              Lista ulubionych filmów
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes.active}
              className={classes.navlink}
              to="/addfilm"
            >
              Dodaj film
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes.active}
              className={classes.navlink}
              to="/addedfilms"
            >
              Lista Dodanych Filmów
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              activeClassName={classes.active}
              className={classes.navlink}
              to="/editfilm"
            >
              Edytuj Dodany Film
            </NavLink>
          </li> */}
        </ul>
      </header>
    </React.Fragment>
  );
};

export default Header;
