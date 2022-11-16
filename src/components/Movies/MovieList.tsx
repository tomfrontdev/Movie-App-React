import styles from '../Movies/MovieList.module.css';
import SingleMovie from './SingleMovie';
import { moviesActions } from '../../store/movies-slice';
import { Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import RemoveItemModal from '../Modals/RemoveItemModal';
import { useAppSelector, useAppDispatch } from '../../store/hooks';

type Movie = {
  id: number;
  img: string;
  year: string;
  title: string;
  rating: number;
};

type AppProps = {
  movie: Movie[];
  addedMovies: boolean;
};

const MovieList = ({ movie, addedMovies }: AppProps) => {
  const dispatch = useAppDispatch();

  const favMovieList =
    useAppSelector((state) => state.movies.favMovieList) ?? [];
  const ownMovieList =
    useAppSelector((state) => state.movies.ownMovieList) ?? [];
  const clickedMovie = useAppSelector((state) => state.movies.clickedMovie);

  const [redirect, setRedirect] = useState(false);
  const showRemoveItemModal = useAppSelector(
    (state) => state.movies.showRemoveItemModal
  );

  const redirectToForm = (id: number) => {
    setRedirect(true);
    const selectedMovie = ownMovieList.find((movie) => movie.id === id);
    dispatch(moviesActions.setclickedMovie(selectedMovie));
  };

  return (
    <React.Fragment>
      {!addedMovies && (
        <section>
          <ul>
            <div className={styles.MovieListcontainer}>
              {movie.map((movie) =>
                favMovieList.find(
                  (favMovie: { id: number }) => favMovie.id === movie.id
                ) ? (
                  <React.Fragment key={movie.id}>
                    <SingleMovie
                      redirectToForm={redirectToForm}
                      title={movie.title}
                      id={movie.id}
                      isFav={true}
                      addedMovies={false}
                      imgSrc={movie.img}
                      score={movie.rating ? movie.rating : 0}
                    ></SingleMovie>
                  </React.Fragment>
                ) : (
                  <React.Fragment key={movie.id}>
                    <SingleMovie
                      redirectToForm={redirectToForm}
                      title={movie.title}
                      isFav={false}
                      addedMovies={false}
                      id={movie.id}
                      imgSrc={movie.img}
                      score={movie.rating ? movie.rating : 0}
                    ></SingleMovie>
                  </React.Fragment>
                )
              )}
            </div>
          </ul>
        </section>
      )}
      {addedMovies && (
        <section className={styles.MovieList}>
          <ul>
            <div className={styles.MovieListcontainer}>
              {movie.map((movie) => (
                <React.Fragment key={movie.id}>
                  <SingleMovie
                    title={movie.title}
                    isFav={true}
                    redirectToForm={redirectToForm}
                    id={movie.id}
                    addedMovies={true}
                    imgSrc={'AddedValue.jpg'}
                    score={movie.rating ? movie.rating : 0}
                  ></SingleMovie>
                </React.Fragment>
              ))}
            </div>
          </ul>
        </section>
      )}
      {showRemoveItemModal && (
        <React.Fragment>
          <RemoveItemModal></RemoveItemModal>
        </React.Fragment>
      )}
      {redirect && <Navigate to={`/editfilm/${clickedMovie!.id}`}></Navigate>}
    </React.Fragment>
  );
};

export default MovieList;
