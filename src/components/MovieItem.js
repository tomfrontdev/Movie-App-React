import React from "react";
import styles from "../components/MovieItem.module.css";
import Button from "../UI/Button";
import { useSelector, useDispatch } from "react-redux";
import { moviesActions } from "../store/movies-slice";
import { uiActions } from "../store/ui-slice";

const MovieItem = ({
  title,
  moviesToDisplay,
  addedMovies,
  id,
  imgSrc,
  isFav,
  score,
}) => {
  const IMAGE_BASE_URL = imgSrc;
  const movieList = useSelector((state) => state.movies.movieList);
  const favMovieList = useSelector((state) => state.movies.favMovieList);
  const ownMovieList = useSelector((state) => state.movies.ownMovieList);

  const dispatch = useDispatch();

  const handleFavoriteMovies = (id) => {
    const selectedMovie = movieList.find((movie) => movie.id === id);

    if (!favMovieList.find((movie) => movie.id === id)) {
      dispatch(moviesActions.addMovieToFav(selectedMovie));
    }
    if (favMovieList.find((movie) => movie.id === id)) {
      dispatch(moviesActions.removeMovieFromFav(selectedMovie));
    }
  };

  const handleMovieToDelete = (id) => {
    dispatch(uiActions.toggleRemoveModal());

    const selectedMovie = ownMovieList.find((movie) => movie.id === id);

    dispatch(moviesActions.setclickedMovie(selectedMovie));
  };

  return (
    <React.Fragment>
      {moviesToDisplay && (
        <li>
          <div
            style={{
              backgroundImage: `url(
              ${IMAGE_BASE_URL}
            )`,
            }}
            className={styles.Moviecontainer}
            onClick={() => handleFavoriteMovies(id)}
          >
            <div className={styles.Moviedatacontainer}>
              <div className={styles.Moviescorecontainer}>
                <p>{score}/10</p>
              </div>
              <div className={styles.Moviebtncontainer}>
                <Button
                  id={id}
                  isFav={isFav}
                  addedMovies={false}
                  handleFavoriteMovies={handleFavoriteMovies}
                ></Button>
              </div>
              <div className={styles.Movieanimateddiv}>
                <p className={styles.Movietitle}> {title}</p>
              </div>
            </div>
          </div>
        </li>
      )}
      {addedMovies && (
        <li>
          <div
            style={{
              backgroundImage:
                "url(https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg)",
            }}
            className={styles.Moviecontainer}
          >
            <div className={styles.Moviedatacontainer}>
              <div className={styles.Moviescorecontainer}>
                <p>{score}/10</p>
              </div>
              <div className={styles.Moviebtncontainer}>
                <Button
                  id={id}
                  addedMovies={true}
                  handleFavoriteMovies={handleMovieToDelete}
                ></Button>
              </div>
              <div className={styles.Movieanimateddiv}>
                <p className={styles.Movietitle}> {title}</p>
              </div>
            </div>
          </div>
        </li>
      )}
    </React.Fragment>
  );
};

export default MovieItem;
