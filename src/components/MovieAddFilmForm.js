import styles from "../components/MovieAddFilmForm.module.css";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { moviesActions } from "../store/Movies";
import { useSelector } from "react-redux";
import RemoveItemModal from "../components/RemoveItemModal";

const MovieAddFilmForm = ({ text }) => {
  const dispatch = useDispatch();
  const [movieTitle, setMovieTitle] = useState();
  const [movieDescription, setMovieDescription] = useState();

  return (
    <React.Fragment>
      <form
        className={styles.Form}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            moviesActions.AddOwnMovies({
              title: movieTitle,
              description: movieDescription,
              id: Math.random(),
            })
          );
        }}
      >
        <div className={styles.FormAddFilmWrapper}>
          <div className={styles.FormInputWrapper}>
            <input
              type="text"
              onChange={(e) => setMovieTitle(e.target.value)}
              placeholder={"Enter movie title..."}
            ></input>
          </div>
          <div className={styles.FormInputWrapper}>
            <input
              type="text"
              onChange={(e) => setMovieDescription(e.target.value)}
              placeholder={"Enter movie description..."}
            ></input>
          </div>
          <div className={styles.FormSubmitBtnWrapper}>
            <button className={styles.FormSubmitBtn} type="submit">
              {text}
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default MovieAddFilmForm;
