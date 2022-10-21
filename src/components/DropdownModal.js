import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import classes from "../components/Header.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";

const DropdownModal = () => {
  const isdayModeActive = useSelector((state) => state.movies.dayMode);
  const showDropDownModal = useSelector((state) => state.ui.showDropDownModal);
  const dispatch = useDispatch();

  const darkorlightMode = isdayModeActive ? "black" : "white";

  const toggleModal = () => {
    dispatch(uiActions.toggleDropDownModal(!showDropDownModal));
  };

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

const ModalSource = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <DropdownModal />,
        document.getElementById("backdrop-root")
      )}
    </React.Fragment>
  );
};

export default ModalSource;
