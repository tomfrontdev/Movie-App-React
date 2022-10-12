import { Fragment } from "react";
import classes from "../components/Header.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import MovieSearchForm from "../components/MovieSearchForm";
import { GiClawSlashes, GiHamburgerMenu as Hamburger } from "react-icons/gi";
import { useState } from "react";
const Header = () => {
  const isFormActive = useSelector((state) => state.movies.isFormActive);
  const [showMenu, setshowMenu] = useState("false");

  const handleToggle = () => {
    console.log("Hi");
    setshowMenu(!showMenu);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.hamburgerContainer + " " + classes.hidden}>
          <Hamburger onClick={handleToggle} className={classes.hamburger} />
        </div>
        {/* <div
          className={
            classes.dropdown + " " + showMenu
              ? classes.showMenu
              : classes.hideMenu
          }
        ></div> */}
        <div
          className={`${classes.dropdown} ${
            !showMenu ? classes.showMenu : classes.hideMenu
          }`}
        ></div>
        <ul className={classes.headerlist + " " + classes.hidden}>
          <li className={classes.headerlink}>
            <NavLink className={classes.navlink} to="/welcome">
              Strona Główna
            </NavLink>
          </li>
          <li className={classes.headerlink}>
            <NavLink className={classes.navlink} to="/favoritemovies">
              Lista ulubionych filmów
            </NavLink>
          </li>
          <li className={classes.headerlink}>
            <NavLink className={classes.navlink} to="/addfilm">
              Dodaj film
            </NavLink>
          </li>
          <li className={classes.headerlink}>
            <NavLink className={classes.navlink} to="/addedfilms">
              Lista Dodanych Filmów
            </NavLink>
          </li>
        </ul>
        {isFormActive && <MovieSearchForm></MovieSearchForm>}
      </header>
    </Fragment>
  );
};

export default Header;
