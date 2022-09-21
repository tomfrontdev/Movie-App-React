import styles from "../components/MovieAddFilmForm.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { moviesActions } from "../store/movies-slice";
import { useSelector } from "react-redux";

const MovieAddFilmForm = ({
  text,
  title,
  description,
  submitHandlerDispatch,
}) => {
  const movieTitle = useSelector((state) => state.movies.movieTitle);
  const movieDescription = useSelector(
    (state) => state.movies.movieDescription
  );
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <form
        className={styles.Form}
        onSubmit={(e) => {
          e.preventDefault();
          submitHandlerDispatch();
          dispatch(moviesActions.setTitle(""));
          dispatch(moviesActions.setDescription(""));
        }}
      >
        <div className={styles.FormAddFilmWrapper}>
          <div className={styles.FormInputWrapper}>
            <input
              type="text"
              onChange={(e) => dispatch(moviesActions.setTitle(e.target.value))}
              placeholder={"Enter movie title..."}
              value={title}
            ></input>
          </div>
          <div className={styles.FormInputWrapper}>
            <input
              type="text"
              onChange={(e) =>
                dispatch(moviesActions.setDescription(e.target.value))
              }
              placeholder={"Enter movie description..."}
              value={description}
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