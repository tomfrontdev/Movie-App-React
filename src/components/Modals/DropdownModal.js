import React from "react";
import { useDispatch } from "react-redux";
import classes from "../Header/Header.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { moviesActions } from "../../store/movies-slice";

const DropdownModal = () => {
  const isdayModeActive = useSelector((state) => state.movies.dayMode);
  const showDropDownModal = useSelector(
    (state) => state.movies.showDropDownModal
  );
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(moviesActions.toggleDropDownModal(!showDropDownModal));
  };

  const darkorlightMode = isdayModeActive ? "black" : "white";

  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={toggleModal}>
        <div
          className={`${classes.dropdown} ${
            showDropDownModal ? classes.showMenu : classes.hidden
          }`}
          style={{ backgroundColor: isdayModeActive ? "white" : "black" }}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className={classes.dropdownlist}>
            <AiOutlineClose
              onClick={toggleModal}
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
      </div>
    </React.Fragment>
  );
};

export default DropdownModal;
