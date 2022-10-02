import { Fragment } from "react";
import classes from "../components/Header.module.css";
import { NavLink } from "react-router-dom";
import MovieSearchForm from "../components/MovieSearchForm";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <ul className={classes.headerlist}>
          <li className={classes.headerlink}>
            <NavLink
              // activeClassName={classes.active}
              className={classes.navlink}
              to="/welcome"
            >
              Strona Główna
            </NavLink>
          </li>
          <li className={classes.headerlink}>
            <NavLink
              // activeClassName={classes.active}
              className={classes.navlink}
              to="/favoritemovies"
            >
              Lista ulubionych filmów
            </NavLink>
          </li>
          <li className={classes.headerlink}>
            <NavLink
              // activeClassName={classes.active}
              className={classes.navlink}
              to="/addfilm"
            >
              Dodaj film
            </NavLink>
          </li>
          <li className={classes.headerlink}>
            <NavLink
              // activeClassName={classes.active}
              className={classes.navlink}
              to="/addedfilms"
            >
              Lista Dodanych Filmów
            </NavLink>
          </li>
        </ul>
        <MovieSearchForm></MovieSearchForm>
      </header>
    </Fragment>
  );
};

export default Header;
