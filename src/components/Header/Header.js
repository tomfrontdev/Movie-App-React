import { Fragment } from "react";
import classes from "../Header/Header.module.css";
import { useSelector } from "react-redux";
import DropdownModal from "../Modals/DropdownModal";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu as Hamburger } from "react-icons/gi";
import SearchMovie from "../Forms/SearchMovie";
import { moviesActions } from "../../store/movies-slice";
import Nav from "../Header/Nav";

const Header = () => {
  const isFormActive = useSelector((state) => state.movies.isFormActive);
  const isdayModeActive = useSelector((state) => state.movies.dayMode);
  const showDropDownModal = useSelector(
    (state) => state.movies.showDropDownModal
  );

  const dispatch = useDispatch();

  const location = useLocation();

  const toggleModal = () => {
    dispatch(moviesActions.toggleDropDownModal(!showDropDownModal));
  };

  useEffect(() => {
    dispatch(moviesActions.toggleDropDownModal(false));
  }, [location, dispatch]);

  const darkorlightMode = isdayModeActive ? "black" : "white";

  return (
    <Fragment>
      <header className={classes.header}>
        {!showDropDownModal && (
          <div className={classes.hamburgerContainer + " " + classes.hidden}>
            <Hamburger
              onClick={toggleModal}
              className={classes.hamburger}
              style={{ color: darkorlightMode }}
            />
          </div>
        )}
        {showDropDownModal && <DropdownModal />}
        <ul className={classes.headerlist + " " + classes.hidden}>
          <Nav darkorlightMode={darkorlightMode} toggleModal={toggleModal} />
        </ul>
        {isFormActive && <SearchMovie />}
      </header>
    </Fragment>
  );
};

export default Header;
