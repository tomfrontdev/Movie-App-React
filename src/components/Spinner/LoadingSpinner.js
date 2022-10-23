import classes from "./LoadingSpinner.module.css";
import ReactDOM from "react-dom";
import React from "react";

const LoadingSpinner = () => {
  return (
    <div>
      <div className={classes.spinnerWrapper}>
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

const Spinner = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <LoadingSpinner />,
        document.getElementById("backdrop-root")
      )}
    </React.Fragment>
  );
};

export default Spinner;
