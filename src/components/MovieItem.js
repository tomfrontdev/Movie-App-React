import React from "react";
import styles from "../components/MovieItem.module.css";
import Button from "../UI/Button";
import ImageContainer from "../components/ImageContainer";
import { useSelector, useDispatch } from "react-redux";
import { moviesActions } from "../store/movies-slice";
import { MdFavoriteBorder } from "react-icons/md";

const MovieItem = ({
  title,
  year,
  moviesToDisplay,
  addedMovies,
  description,
  id,
  imgSrc,
  text,
  isFav,
}) => {
  const IMAGE_BASE_URL = imgSrc;
  const movieList = useSelector((state) => state.movies.movieList);
  const favMovieList = useSelector((state) => state.movies.favMovieList);
  const dispatch = useDispatch();

  const handleFavoriteMovies = (id) => {
    console.log(id);
    const selectedMovie = movieList.find((movie) => movie.id === id);

    if (!favMovieList.find((movie) => movie.id === id)) {
      dispatch(moviesActions.addMovieToFav(selectedMovie));
    }
    if (favMovieList.find((movie) => movie.id === id)) {
      dispatch(moviesActions.removeMovieFromFav(selectedMovie));
    }
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
          >
            <div className={styles.Moviedatacontainer}>
              <div className={styles.Moviebtncontainer}>
                <Button
                  id={id}
                  text={text}
                  isFav={isFav}
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
              backgroundImage: `url(
            ${IMAGE_BASE_URL}
          )`,
            }}
            className={styles.Moviecontainer}
          >
            <div className={styles.Moviedatacontainer}>
              <p className={styles.Movietitle}>Movie title:</p>
              <p>{title}</p>
              <p className={styles.Movieyear}>Date of Premiere</p>
              <p>{year}</p>
              <div className={styles.Moviebtncontainer}>
                <Button
                  id={id}
                  text={text}
                  isFav={isFav}
                  handleFavoriteMovies={handleFavoriteMovies}
                ></Button>
              </div>
            </div>
          </div>
        </li>
      )}
    </React.Fragment>
  );
};

export default MovieItem;
