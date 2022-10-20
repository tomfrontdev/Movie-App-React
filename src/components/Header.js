import { Fragment } from "react";
import classes from "../components/Header.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import MovieSearchForm from "../components/MovieSearchForm";
import DropdownModal from "../components/DropdownModal";
import { GiHamburgerMenu as Hamburger } from "react-icons/gi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const isFormActive = useSelector((state) => state.movies.isFormActive);
  const isdayModeActive = useSelector((state) => state.movies.dayMode);
  const showDropDownModal = useSelector((state) => state.ui.showDropDownModal);

  const darkorlightMode = isdayModeActive ? "black" : "white";

  const dispatch = useDispatch();

  const location = useLocation();

  const toggleModal = () => {
    dispatch(uiActions.toggleDropDownModal());
  };

  useEffect(() => {
    toggleModal();
  }, [location]);

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.hamburgerContainer + " " + classes.hidden}>
          <Hamburger
            onClick={toggleModal}
            className={classes.hamburger}
            style={{ color: darkorlightMode }}
          />
        </div>
        {showDropDownModal && (
          <DropdownModal toggleModal={toggleModal}></DropdownModal>
        )}
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
