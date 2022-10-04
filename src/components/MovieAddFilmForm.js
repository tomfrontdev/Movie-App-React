import styles from "../components/MovieAddFilmForm.module.css";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { moviesActions } from "../store/movies-slice";

import Button from "../UI/Button";
import btn from "../UI/Button.module.css";
import { FaBullseye } from "react-icons/fa";

const MovieAddFilmForm = () => {
  const dispatch = useDispatch();

  const [movieTitle, setMovieTitle] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [enteredMovieTitleisEmpty, setenteredMovieTitleisEmpty] =
    useState(false);
  const [enteredMovieRatingisEmpty, setenteredMovieRatingisEmpty] =
    useState(false);
  const [enteredMovieTitleIsValid, setenteredMovieTitleIsValid] =
    useState(false);
  const [enteredMovieRatingIsValid, setenteredMovieRatingIsValid] =
    useState(false);

  const enteredInputDataIsValid =
    enteredMovieTitleIsValid &&
    !enteredMovieTitleisEmpty &&
    enteredMovieRatingIsValid &&
    !enteredMovieRatingisEmpty;

  const submitformValidation = (event) => {
    event.preventDefault();

    if (enteredInputDataIsValid)
      dispatch(
        moviesActions.addOwnMovies({
          title: movieTitle,
          rating: movieRating,
          id: Math.floor(Math.random() * (999 - 1) + 1),
        })
      );
  };

  const movieRatingBlurHandler = () => {
    if (movieRating == "") setenteredMovieRatingisEmpty(true);
  };

  const movieTitleBlurHandler = () => {
    if (movieTitle == "") setenteredMovieTitleisEmpty(true);
  };

  const checkInputs = () => {
    if (movieRating !== "") setenteredMovieRatingisEmpty(false);
    if (movieTitle !== "") setenteredMovieTitleisEmpty(false);
    if (
      (movieRating >= 11 && 0 <= movieRating) ||
      isNaN(movieRating) ||
      movieRating < 0
    )
      setenteredMovieRatingIsValid(false);
    else setenteredMovieRatingIsValid(true);
    setenteredMovieTitleIsValid(true);
    if (!isNaN(movieTitle) && movieTitle !== "") {
      setenteredMovieTitleIsValid(false);
    }
    if (isNaN(movieTitle)) {
      setenteredMovieTitleIsValid(true);
    }
  };

  useEffect(() => {
    checkInputs();
  });

  return (
    <React.Fragment>
      <section className={styles.FormWrapper}>
        <form className={styles.Form} onSubmit={submitformValidation}>
          <div className={styles.FormAddFilmWrapper}>
            <div className={styles.FormInputWrapper}>
              <input
                type="text"
                onChange={(e) => {
                  setMovieTitle(e.target.value);
                }}
                onBlur={movieTitleBlurHandler}
                placeholder={"Enter movie title..."}
                // value={title}
              ></input>
              {!enteredMovieTitleIsValid && (
                <p className={styles["error-text"]}>
                  Movie title must not contain numbers!
                </p>
              )}
              {enteredMovieTitleisEmpty && (
                <p className={styles["error-text"]}>
                  Movie title must not be empty!
                </p>
              )}
            </div>
            <div className={styles.FormInputWrapper}>
              <input
                type="text"
                onChange={(e) => {
                  setMovieRating(e.target.value);
                }}
                onBlur={movieRatingBlurHandler}
                placeholder={"Enter movie rating..."}
              ></input>

              {!enteredMovieRatingIsValid && (
                <p className={styles["error-text"]}>
                  Movie rating must be a number between 0 and 10!
                </p>
              )}
              {enteredMovieRatingisEmpty && (
                <p className={styles["error-text"]}>
                  Movie rating must not be empty!
                </p>
              )}
            </div>
            <div className={styles.FormSubmitBtnWrapper}>
              <Button type="submit" classTitle={btn.greenBorder}>
                Add
              </Button>
            </div>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default MovieAddFilmForm;
