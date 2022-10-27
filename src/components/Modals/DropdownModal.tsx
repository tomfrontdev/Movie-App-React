import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import classes from "./DropdownModal.module.css";
import { useSelector } from "react-redux";
import { moviesActions } from "../../store/movies-slice";
import Nav from "../Header/Nav";
import { AiOutlineClose } from "react-icons/ai";

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
          style={{ backgroundColor: !isdayModeActive }}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className={classes.dropdownlist}>
            <AiOutlineClose
              onClick={toggleModal}
              className={classes.closeIcon}
              style={{ color: darkorlightMode }}
            />
            <Nav darkorlightMode={darkorlightMode} toggleModal={toggleModal} />
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
