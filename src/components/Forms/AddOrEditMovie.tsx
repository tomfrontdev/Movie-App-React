import styles from '../Forms/AddOrEditMovie.module.css';
import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { moviesActions } from '../../store/movies-slice';
import Button from '../Buttons/Button';
import btn from '../Buttons/Button.module.css';
import ErrorMessages from '../ErrorMessages/ErrorMessages';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type AppProps = {
  text: string;
  editMovie: boolean;
  index?: number;
  title?: string;
  rating?: any;
};

const AddOrEditMovie = ({
  text,
  editMovie,
  index,
  title,
  rating,
}: AppProps) => {
  const dispatch = useAppDispatch();
  const movieTitle = useAppSelector((state) => state.movies.movieTitle);
  const movieRating = useAppSelector((state) => state.movies.movieRating);
  const [noMovieEntered, setnoMovieEntered] = useState(false);
  const [noRatingEntered, setnoRatingEntered] = useState(false);
  const [enteredMovieTitleIsInvalid, setenteredMovieTitleIsInvalid] =
    useState(true);
  const [enteredMovieRatingIsInValid, setenteredMovieRatingIsInValid] =
    useState(true);

  const movieInput = useRef<HTMLInputElement | null>(null);
  const movieRatingInput = useRef<HTMLInputElement | null>(null);

  const movieAddedMessage = () =>
    toast.success('Movie Added Successfully!', {
      position: 'bottom-left',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  const movieEditedMessage = () =>
    toast.success('Movie Edited Successfully!', {
      position: 'bottom-left',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  const emptyTitleInput = movieTitle === '';
  const emptyRatingInput = movieRating === '';

  const isFormDataValid =
    movieRatingInput.current != null &&
    movieInput.current != null &&
    movieRatingInput.current.value !== '' &&
    movieInput.current.value !== '' &&
    !enteredMovieTitleIsInvalid &&
    !enteredMovieRatingIsInValid;

  const checkIfInputsAreEmpty = () => {
    if (movieInput.current !== null && movieInput.current.value === '') {
      setnoMovieEntered(true);
    }

    if (
      movieRatingInput.current != null &&
      movieRatingInput.current.value === ''
    ) {
      setnoRatingEntered(true);
    }
  };

  const submitformValidation = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    checkIfInputsAreEmpty();

    if (isFormDataValid) {
      addMovies();
      movieAddedMessage();
    }

    if (movieInput.current != null && movieRatingInput.current != null) {
      movieInput.current.focus();
      movieInput.current.value = '';
      movieRatingInput.current.value = '';
    }
  };

  const submitEditMovie = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    checkIfInputsAreEmpty();
    if (
      isFormDataValid &&
      movieInput.current != null &&
      movieRatingInput.current != null
    ) {
      dispatch(
        moviesActions.editMovie({
          id: index,
          title: movieInput.current.value,
          rating: movieRatingInput.current.value,
        })
      );

      movieEditedMessage();
    }
  };

  const addMovies = () => {
    if (movieInput.current != null && movieRatingInput.current != null) {
      dispatch(
        moviesActions.addOwnMovies({
          title: movieInput.current.value,
          rating: movieRatingInput.current.value,
          id: Math.floor(Math.random() * (999 - 1) + 1),
        })
      );
    }
  };

  useLayoutEffect(() => {
    const validateInputData = () => {
      setnoRatingEntered(false);
      setnoMovieEntered(false);
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
    if (movieInput.current != null) {
      movieInput.current.focus();
    }
    if (
      title &&
      rating &&
      movieInput.current != null &&
      movieRatingInput.current != null
    ) {
      movieInput.current.value = title!;
      movieRatingInput.current.value = rating!;
    }
  }, [rating, title]);

  return (
    <React.Fragment>
      <section className={styles.FormWrapper}>
        <ToastContainer
          position="bottom-left"
          style={{
            width: '70%',
            position: 'absolute',
            left: '0',
            bottom: '20px',
          }}
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <form
          className={styles.Form}
          onSubmit={editMovie ? submitEditMovie : submitformValidation}
        >
          <div className={styles.FormAddFilmWrapper}>
            <div className={styles.FormTitleInputWrapper}>
              <input
                type="text"
                onChange={(e) => {
                  dispatch(moviesActions.setTitle(e.target.value));
                }}
                ref={movieInput}
                placeholder={
                  editMovie ? 'Edit movie title...' : 'Enter movie title...'
                }
                className={styles.FormInput}
              ></input>
              {enteredMovieTitleIsInvalid && (
                <ErrorMessages classTitle={styles.FormValidationError}>
                  Movie title must not be a number!
                </ErrorMessages>
              )}
              {noMovieEntered && (
                <ErrorMessages classTitle={styles.FormValidationError}>
                  Movie title must not be empty!
                </ErrorMessages>
              )}
            </div>
            <div className={styles.FormRatingInputWrapper}>
              <input
                type="text"
                ref={movieRatingInput}
                onChange={(e) => {
                  dispatch(moviesActions.setRating(e.target.value));
                }}
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
              {noRatingEntered && (
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
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default AddOrEditMovie;
