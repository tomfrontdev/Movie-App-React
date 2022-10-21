import styles from "../components/MovieList.module.css";
import MovieItem from "./MovieItem";
import { useSelector, useDispatch } from "react-redux";
import { moviesActions } from "../store/movies-slice";
import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import RemoveItemModal from "../components/RemoveItemModal";

const MovieList = ({ movie, foundMovies, addedMovies }) => {
  const dispatch = useDispatch();

  const favMovieList = useSelector((state) => state.movies.favMovieList);
  const ownMovieList = useSelector((state) => state.movies.ownMovieList);
  const clickedMovie = useSelector((state) => state.movies.clickedMovie);

  const [redirect, setRedirect] = useState(false);
  const showRemoveItemModal = useSelector(
    (state) => state.ui.showRemoveItemModal
  );

  const redirectToForm = (id) => {
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
                favMovieList.find((favMovie) => favMovie.id === movie.id) ? (
                  <React.Fragment>
                    <MovieItem
                      title={movie.title}
                      year={movie.year}
                      id={movie.id}
                      isFav={true}
                      addedMovies={false}
                      imgSrc={movie.img}
                      score={movie.rating ? movie.rating : 0}
                    ></MovieItem>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <MovieItem
                      title={movie.title}
                      foundMovies={foundMovies}
                      year={movie.year}
                      isFav={false}
                      addedMovies={false}
                      id={movie.id}
                      imgSrc={movie.img}
                      score={movie.rating ? movie.rating : 0}
                    ></MovieItem>
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
                <React.Fragment>
                  <MovieItem
                    title={movie.title}
                    redirectToForm={redirectToForm}
                    year={movie.year}
                    id={movie.id}
                    addedMovies={true}
                    imgSrc={"brokenimage.png"}
                    score={movie.rating ? movie.rating : 0}
                  ></MovieItem>
                </React.Fragment>
              ))}
            </div>
          </ul>
        </section>
      )}
      {showRemoveItemModal && (
        <React.Fragment>
          <RemoveItemModal movie={ownMovieList}></RemoveItemModal>
        </React.Fragment>
      )}
      {redirect && <Navigate to={`/editfilm/${clickedMovie.id}`}></Navigate>}
    </React.Fragment>
  );
};

export default MovieList;
