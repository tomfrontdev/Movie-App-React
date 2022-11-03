import styles from '../Forms/AddOrEditMovie.module.css';
import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { moviesActions } from '../../store/movies-slice';
import Button from '../Buttons/Button';
import btn from '../Buttons/Button.module.css';
import ErrorMessages from '../ErrorMessages/ErrorMessages';
import { useAppSelector, useAppDispatch } from '../../store/hooks';

type AppProps = {
  text: string;
  editMovie: boolean;
  index?: number;
};

const AddOrEditMovie = ({ text, editMovie, index }: AppProps) => {
  const dispatch = useAppDispatch();

  const movieTitle = useAppSelector((state) => state.movies.movieTitle);
  const movieRating = useAppSelector((state) => state.movies.movieRating);
  const [enteredMovieTitleIsTouched, setenteredMovieTitleIsTouched] =
    useState(false);
  const [enteredMovieRatingIsTouched, setenteredMovieRatingIsTouched] =
    useState(false);
  const [enteredMovieTitleIsInvalid, setenteredMovieTitleIsInvalid] =
    useState(true);
  const [enteredMovieRatingIsInValid, setenteredMovieRatingIsInValid] =
    useState(true);
  const [isMovieAdded, setIsMovieAdded] = useState(false);
  const [isMovieEdited, setIsMovieEdited] = useState(false);

  const movieInput = useRef() as React.MutableRefObject<HTMLInputElement>;
  const movieRatingInput = useRef() as React.MutableRefObject<HTMLInputElement>;

  // const focusInput = () => movieInput.current.focus();

  // const cleanInputs = () => {
  //   movieInput.current.value = '';
  //   movieRatingInput.current.value = '';
  // };

  const emptyTitleInput = movieTitle === '';
  const emptyRatingInput = movieRating === '';

  const isFormDataValid =
    !enteredMovieTitleIsInvalid &&
    !enteredMovieRatingIsInValid &&
    !emptyTitleInput &&
    !emptyRatingInput;

  const submitformValidation = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (emptyTitleInput) {
      setenteredMovieTitleIsTouched(true);
    }

    if (emptyRatingInput) {
      setenteredMovieRatingIsTouched(true);
    }

    if (isFormDataValid) {
      setIsMovieAdded(true);

      setTimeout(function () {
        setIsMovieAdded(false);
      }, 1500);

      addMovies();
    }
  };

  const submitEditMovie = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (isFormDataValid) {
      dispatch(
        moviesActions.editMovie({
          id: index,
          title: movieTitle,
          rating: movieRating,
        })
      );

      setIsMovieEdited(true);
      setTimeout(function () {
        setIsMovieEdited(false);
        setIsMovieAdded(false);
      }, 1500);
    }
  };

  const addMovies = () => {
    dispatch(
      moviesActions.addOwnMovies({
        title: movieTitle,
        rating: movieRating,
        id: Math.floor(Math.random() * (999 - 1) + 1),
      })
    );
  };

  const movieRatingBlurHandler = () => {
    if (emptyRatingInput) setenteredMovieRatingIsTouched(true);
  };

  const movieTitleBlurHandler = () => {
    if (emptyTitleInput) setenteredMovieTitleIsTouched(true);
  };

  useLayoutEffect(() => {
    const validateInputData = () => {
      if (!emptyRatingInput) setenteredMovieRatingIsTouched(false);
      if (!emptyTitleInput) setenteredMovieTitleIsTouched(false);
      setenteredMovieRatingIsInValid(false);
      if (
        (+movieRating >= 11 && 0 <= +movieRating) ||
        isNaN(+movieRating) ||
        +movieRating < 0
      )
        setenteredMovieRatingIsInValid(true);
      if (!isNaN(+movieTitle) && movieTitle !== '')
        setenteredMovieTitleIsInvalid(true);
      else setenteredMovieTitleIsInvalid(false);
    };
    validateInputData();
  }, [movieTitle, movieRating, emptyRatingInput, emptyTitleInput]);

  useEffect(() => {
    if (movieInput.current != null && movieRatingInput.current != null) {
      movieInput.current.focus();
      movieInput.current.value = '';
      movieRatingInput.current.value = '';
    }
  }, [isMovieAdded]);

  return (
    <React.Fragment>
      <section className={styles.FormWrapper}>
        <form
          className={styles.Form}
          onSubmit={editMovie ? submitEditMovie : submitformValidation}
        >
          <div className={styles.FormAddFilmWrapper}>
            <div className={styles.FormInputWrapper}>
              <input
                type="text"
                onChange={(e) => {
                  dispatch(moviesActions.setTitle(e.target.value));
                }}
                ref={movieInput}
                onBlur={movieTitleBlurHandler}
                placeholder={
                  editMovie ? 'Edit movie title...' : 'Enter movie title...'
                }
                className={styles.FormInput}
              ></input>
              {enteredMovieTitleIsInvalid && (
                <ErrorMessages classTitle={styles.FormValidationError}>
                  Movie title must not start with a number!
                </ErrorMessages>
              )}
              {enteredMovieTitleIsTouched && (
                <ErrorMessages classTitle={styles.FormValidationError}>
                  Movie title must not be empty!
                </ErrorMessages>
              )}
            </div>
            <div className={styles.FormInputWrapper}>
              <input
                type="text"
                ref={movieRatingInput}
                onChange={(e) => {
                  dispatch(moviesActions.setRating(e.target.value));
                }}
                onBlur={movieRatingBlurHandler}
                placeholder={
                  editMovie ? 'Edit movie rating...' : 'Enter movie rating...'
                }
                className={styles.FormInput}
              ></input>

              {enteredMovieRatingIsInValid && (
                <ErrorMessages classTitle={styles.FormValidationError}>
                  Movie rating must be a number between 0 and 10!
                </ErrorMessages>
              )}
              {enteredMovieRatingIsTouched && (
                <ErrorMessages classTitle={styles.FormValidationError}>
                  Movie rating must not be empty!
                </ErrorMessages>
              )}
            </div>
            <div className={styles.FormSubmitBtnWrapper}>
              <Button
                type="submit"
                classTitle={btn.Btn + ' ' + btn.greenBorder}
              >
                {text}
              </Button>
            </div>
            {isMovieAdded && (
              <p className={styles.successmsg}> Movie Added Successfully!</p>
            )}
            {isMovieEdited && (
              <p className={styles.successmsg}> Movie Edited Successfully!</p>
            )}
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default AddOrEditMovie;
