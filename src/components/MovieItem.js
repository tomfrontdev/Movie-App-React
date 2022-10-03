import React from "react";
import styles from "../components/MovieItem.module.css";
import Button from "../UI/Button";
import btn from "../UI/Button.module.css";
import { useSelector, useDispatch } from "react-redux";
import { moviesActions } from "../store/movies-slice";
import { uiActions } from "../store/ui-slice";
import { MdFavoriteBorder, MdFavorite, MdDeleteOutline } from "react-icons/md";

const MovieItem = ({ title, addedMovies, id, imgSrc, isFav, score }) => {
  const dispatch = useDispatch();
  const IMAGE_BASE_URL = imgSrc;
  const movieList = useSelector((state) => state.movies.movieList);
  const favMovieList = useSelector((state) => state.movies.favMovieList);
  const ownMovieList = useSelector((state) => state.movies.ownMovieList);

  const handleFavoriteMovies = (id) => {
    const selectedMovie = movieList.find((movie) => movie.id === id);

    if (!favMovieList.find((movie) => movie.id === id)) {
      dispatch(moviesActions.addMovieToFav(selectedMovie));
    }

    if (favMovieList.find((movie) => movie.id === id)) {
      dispatch(moviesActions.removeMovieFromFav(id));
    }
  };

  const handleMovieToDelete = (id) => {
    console.log(id);
    dispatch(uiActions.toggleRemoveModal());

    const selectedMovie = ownMovieList.find((movie) => movie.id === id);

    dispatch(moviesActions.setclickedMovie(selectedMovie));
  };

  return (
    <React.Fragment>
      <li>
        <div
          style={{
            backgroundImage: `url(
              ${IMAGE_BASE_URL}
            )`,
          }}
          className={styles.Moviecontainer}
          onClick={
            !addedMovies
              ? () => handleFavoriteMovies(id)
              : () => handleMovieToDelete(id)
          }
        >
          <div className={styles.Moviedatacontainer}>
            <div className={styles.Moviescorecontainer}>
              <p>{score}/10</p>
            </div>
            <div className={styles.Moviebtncontainer}>
              {!addedMovies ? (
                <Button classTitle={btn.noBorder}>
                  {isFav ? (
                    <MdFavorite className={btn.Icon}></MdFavorite>
                  ) : (
                    <MdFavoriteBorder className={btn.Icon}></MdFavoriteBorder>
                  )}
                </Button>
              ) : (
                <Button classTitle={btn.noBorder}>
                  <MdDeleteOutline className={btn.Icon}></MdDeleteOutline>
                </Button>
              )}
            </div>
            <div className={styles.Movieanimateddiv}>
              <p className={styles.Movietitle}> {title}</p>
            </div>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
};

export default MovieItem;
