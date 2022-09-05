import classes from "../components/SpinnerModal.module.css";
import ReactDOM from "react-dom";
import React from "react";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const Spinner = () => {
  return (
    <div>
      <div className={classes.modal}>
        <div className={classes.ldsspinner}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

const SpinnerModal = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Spinner />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default SpinnerModal;
