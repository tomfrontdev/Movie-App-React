import styles from "../components/MovieAddFilmForm.module.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { moviesActions } from "../store/movies-slice";
import { useSelector } from "react-redux";
import Button from "../UI/Button";
import btn from "../UI/Button.module.css";

const MovieAddFilmForm = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [enteredMovieTitleIsValid, setenteredMovieTitleIsValid] =
    useState(true);
  const [enteredRatingIsValid, setenteredRatingIsValid] = useState(true);

  const dispatch = useDispatch();

  let validation = true;

  const submitHandlerDispatch = (e) => {
    e.preventDefault();

    if (!movieTitle) {
      setenteredMovieTitleIsValid(false);
      validation = false;
    }

    if (!movieRating || (movieRating >= 10 && 0 <= movieRating)) {
      setenteredRatingIsValid(false);
      validation = false;
    }

    if (validation)
      dispatch(
        moviesActions.addOwnMovies({
          title: movieTitle,
          rating: movieRating,
          id: Math.floor(Math.random() * (999 - 1) + 1),
        })
      );
  };

  return (
    <React.Fragment>
      <section className={styles.FormWrapper}>
        <form
          className={styles.Form}
          onSubmit={(e) => submitHandlerDispatch(e)}
        >
          <div className={styles.FormAddFilmWrapper}>
            <div className={styles.FormInputWrapper}>
              <input
                type="text"
                onChange={(e) => {
                  setMovieTitle(e.target.value);
                  setenteredMovieTitleIsValid(true);
                }}
                placeholder={"Enter movie title..."}
                // value={title}
              ></input>
              {!enteredMovieTitleIsValid && (
                <p className={styles["error-text"]}>
                  Movie title must not be empty!
                </p>
              )}
            </div>
            <div className={styles.FormInputWrapper}>
              <input
                type="text"
                onChange={(e) => setMovieRating(e.target.value)}
                placeholder={"Enter movie rating..."}
                // value={rating}
              ></input>

              {!enteredRatingIsValid && (
                <p className={styles["error-text"]}>
                  Movie rate must be a number between 0 and 10!
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
