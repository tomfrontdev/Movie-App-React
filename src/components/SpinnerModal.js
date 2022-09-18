import classes from "../components/SpinnerModal.module.css";
import ReactDOM from "react-dom";
import React from "react";

// const Backdrop = () => {
//   return <div className={classes.backdrop} />;
// };

const Spinner = () => {
  return (
    <div>
      <div className={classes.backdrop}>
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
    </div>
  );
};

const SpinnerModal = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Spinner />,
        document.getElementById("backdrop-root")
      )}
    </React.Fragment>
  );
};
export default SpinnerModal;
