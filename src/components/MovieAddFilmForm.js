import styles from "../components/MovieAddFilmForm.module.css";
import React, { useState, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { moviesActions } from "../store/movies-slice";
import Button from "../UI/Button";
import btn from "../UI/Button.module.css";

const MovieAddFilmForm = () => {
  const dispatch = useDispatch();

  const [movieTitle, setMovieTitle] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [enteredMovieTitleIsTouched, setenteredMovieTitleIsTouched] =
    useState(false);
  const [enteredMovieRatingIsTouched, setenteredMovieRatingIsTouched] =
    useState(false);
  const [enteredMovieTitleIsInvalid, setenteredMovieTitleIsInvalid] =
    useState(true);
  const [enteredMovieRatingIsInValid, setenteredMovieRatingIsInValid] =
    useState(true);
  const [isMovieAdded, setIsMovieAdded] = useState(false);

  const emptyTitleInput = movieTitle == "";
  const emptyRatingInput = movieRating == "";

  const isFormDataValid =
    !enteredMovieTitleIsInvalid &&
    !enteredMovieRatingIsInValid &&
    !emptyTitleInput &&
    !emptyRatingInput;

  const submitformValidation = (event) => {
    event.preventDefault();

    if (emptyTitleInput) {
      setenteredMovieTitleIsTouched(true);
    }

    if (emptyRatingInput) {
      setenteredMovieRatingIsTouched(true);
    }
    if (isFormDataValid) {
      setIsMovieAdded(true);

      const hideSuccessMsg = setTimeout(function () {
        setIsMovieAdded(false);
      }, 1500);

      dispatch(
        moviesActions.addOwnMovies({
          title: movieTitle,
          rating: movieRating,
          id: Math.floor(Math.random() * (999 - 1) + 1),
        })
      );
    }
  };

  const movieRatingBlurHandler = () => {
    if (emptyRatingInput) setenteredMovieRatingIsTouched(true);
  };

  const movieTitleBlurHandler = () => {
    if (emptyTitleInput) setenteredMovieTitleIsTouched(true);
  };

  const validateInputData = () => {
    if (!emptyRatingInput) setenteredMovieRatingIsTouched(false);
    if (!emptyTitleInput) setenteredMovieTitleIsTouched(false);
    setenteredMovieRatingIsInValid(false);
    if (
      (movieRating >= 11 && 0 <= movieRating) ||
      isNaN(movieRating) ||
      movieRating < 0
    )
      setenteredMovieRatingIsInValid(true);
    if (!isNaN(movieTitle) && movieTitle !== "")
      setenteredMovieTitleIsInvalid(true);
    else setenteredMovieTitleIsInvalid(false);
  };

  useLayoutEffect(() => {
    validateInputData();
  }, [movieRating, movieTitle]);

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
              {enteredMovieTitleIsInvalid && (
                <p className={styles["error-text"]}>
                  Movie title must not contain numbers!
                </p>
              )}
              {enteredMovieTitleIsTouched && (
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

              {enteredMovieRatingIsInValid && (
                <p className={styles["error-text"]}>
                  Movie rating must be a number between 0 and 10!
                </p>
              )}
              {enteredMovieRatingIsTouched && (
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
            {isMovieAdded && (
              <p className={styles.successmsg}> Movie Added Successfully!</p>
            )}
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default MovieAddFilmForm;
