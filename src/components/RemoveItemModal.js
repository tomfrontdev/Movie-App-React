import ReactDOM from "react-dom";
import React from "react";
import classes from "../components/RemoveItemModal.module.css";
import Button from "../UI/Button";
import btn from "../UI/Button.module.css";

import { moviesActions } from "../store/movies-slice";
import { uiActions } from "../store/ui-slice";
import { useDispatch } from "react-redux";

const RemoveItemModal = () => {
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(uiActions.toggleRemoveModal());
  };

  const handleModal = () => {
    toggleModal();
  };

  const removeMovie = () => {
    toggleModal();
    dispatch(moviesActions.removeMovie());
  };

  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={() => handleModal()}>
        <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
          <div className={classes.modaltext}>
            <p>Are you sure to delete?</p>
            <div className={classes.modalbtns}>
              <Button
                onClick={() => handleModal()}
                classTitle={btn.greenBorder}
              >
                No
              </Button>
              <Button onClick={() => removeMovie()} classTitle={btn.redBorder}>
                Yes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const Modal = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <RemoveItemModal />,
        document.getElementById("backdrop-root")
      )}
    </React.Fragment>
  );
};

export default RemoveItemModal;
