import { Fragment, useEffect } from "react";
import classes from "../components/Header.module.css";
import { useSelector } from "react-redux";
import { useLocation, NavLink } from "react-router-dom";
import MovieSearchForm from "../components/MovieSearchForm";
import { GiHamburgerMenu as Hamburger } from "react-icons/gi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const isFormActive = useSelector((state) => state.movies.isFormActive);
  const [showMenu, setshowMenu] = useState(false);
  const location = useLocation();

  const handleToggleDropDown = () => {
    setshowMenu(!showMenu);
  };

  useEffect(() => {
    setshowMenu(false);
  }, [location]);

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.hamburgerContainer + " " + classes.hidden}>
          <Hamburger
            onClick={handleToggleDropDown}
            className={classes.hamburger}
          />
        </div>
        <div
          className={`${classes.dropdown} ${
            showMenu ? classes.showMenu : classes.hidden
          }`}
        >
          <ul className={classes.dropdownlist + " " + classes.hidden}>
            <AiOutlineClose
              onClick={handleToggleDropDown}
              className={classes.closeIcon}
            />
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
        </div>
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
