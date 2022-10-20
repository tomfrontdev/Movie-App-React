import { Fragment, useEffect } from "react";
import classes from "../components/Header.module.css";
import { useSelector } from "react-redux";
import { useLocation, NavLink } from "react-router-dom";
import MovieSearchForm from "../components/MovieSearchForm";
import { GiHamburgerMenu as Hamburger } from "react-icons/gi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import DropdownModal from "../components/DropdownModal";

const Header = () => {
  const isFormActive = useSelector((state) => state.movies.isFormActive);
  const [showMenu, setshowMenu] = useState(false);
  const location = useLocation();
  const isdayModeActive = useSelector((state) => state.movies.dayMode);

  const handleToggleDropDown = () => {
    setshowMenu(!showMenu);
  };

  useEffect(() => {
    setshowMenu(false);
  }, [location]);

  const darkorlightMode = isdayModeActive ? "black" : "white";

  return (
    <Fragment>
      <header className={classes.header}>
        <DropdownModal></DropdownModal>
        <ul className={classes.headerlist + " " + classes.hidden}>
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
        {isFormActive && <MovieSearchForm></MovieSearchForm>}
      </header>
    </Fragment>
  );
};

export default Header;
