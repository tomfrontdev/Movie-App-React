import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = ({ darkorlightMode }: { darkorlightMode: string }) => {
  return (
    <React.Fragment>
      <li className={classes.navli}>
        <NavLink
          className={classes.navlink}
          style={{ color: darkorlightMode }}
          to="/welcome"
        >
          Strona Główna
        </NavLink>
      </li>
      <li className={classes.navli}>
        <NavLink
          className={classes.navlink}
          style={{ color: darkorlightMode }}
          to="/favoritemovies"
        >
          Lista ulubionych filmów
        </NavLink>
      </li>
      <li className={classes.navli}>
        <NavLink
          className={classes.navlink}
          style={{ color: darkorlightMode }}
          to="/addfilm"
        >
          Dodaj film
        </NavLink>
      </li>
      <li className={classes.navli}>
        <NavLink
          className={classes.navlink}
          style={{ color: darkorlightMode }}
          to="/addedfilms"
        >
          Lista Dodanych Filmów
        </NavLink>
      </li>
    </React.Fragment>
  );
};

export default Nav;
