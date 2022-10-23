import React from "react";
import classes from "../Modals/RemoveItemModal.module.css";
import Button from "../Buttons/Button";
import btn from "../Buttons/Button.module.css";

import { moviesActions } from "../../store/movies-slice";
import { useDispatch } from "react-redux";

const RemoveItemModal = () => {
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(moviesActions.toggleRemoveModal());
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
                classTitle={btn.Btn + " " + btn.greenBorder}
              >
                No
              </Button>
              <Button
                onClick={() => removeMovie()}
                classTitle={btn.Btn + " " + btn.redBorder}
              >
                Yes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RemoveItemModal;
