import ReactDOM from "react-dom";
import React from "react";
import classes from "../components/RemoveItemModal.module.css";
import Button from "../UI/Button";
import { moviesActions } from "../store/Movies";
import { useSelector, useDispatch } from "react-redux";

const RemoveItemModal = ({ movie }) => {
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(moviesActions.HandleModal());
  };

  const removeMovie = () => {
    dispatch(moviesActions.HandleModal());
    dispatch(moviesActions.removelastClickedMovie());
  };
  return (
    <React.Fragment>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          <div className={classes.modaltext}>
            <p>Are you sure to delete?</p>
            <div className={classes.modalbtns}>
              <Button
                text={"No"}
                isFav={false}
                handleFavoriteMovies={handleModal}
              ></Button>
              <Button
                text={"Yes"}
                isFav={true}
                handleFavoriteMovies={removeMovie}
              ></Button>
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
