import styles from "../components/MovieList.module.css";
import MovieItem from "./MovieItem";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { moviesActions } from "../store/Movies";
import Button from "../UI/Button";
import MovieItemContainer from "../components/MovieItemContainer.js";
import ButtonContainer from "../components/ButtonContainer.js";
import ImageContainer from "../components/ImageContainer.js";
import SpinnerModal from "../components/SpinnerModal";
import MovieFetchError from "../components/MovieFetchError.js";

const MovieList = ({
  isLoading,
  movie,
  moviesToDisplay,
  searchInput,
  httpError,
}) => {
  const dispatch = useDispatch();

  const movieList = useSelector((state) => state.movieList);
  const favMovieList = useSelector((state) => state.favMovieList);
  const handleFavoriteMovies = (id) => {
    const clickedMovie = movieList.find((movie) => movie.id === id);

    if (!favMovieList.find((movie) => movie.id === id)) {
      dispatch(moviesActions.AddMovieToFav(clickedMovie));
    }
    if (favMovieList.find((movie) => movie.id === id)) {
      dispatch(moviesActions.RemoveMovieFromFav(clickedMovie));
    }
  };

  return (
    <React.Fragment>
      <div className={styles.MovieList}>
        {isLoading && <SpinnerModal></SpinnerModal>}
        {!moviesToDisplay && searchInput !== "" && !httpError && (
          <MovieFetchError text={"No Movies Found! :("}></MovieFetchError>
        )}
        {httpError && !moviesToDisplay && (
          <MovieFetchError text={httpError}></MovieFetchError>
        )}
        {!isLoading && (
          <ul>
            {movie.map((movie) =>
              favMovieList.find((favMovie) => favMovie.id === movie.id) ? (
                <React.Fragment>
                  <MovieItemContainer>
                    <MovieItem
                      title={movie.title}
                      year={movie.year}
                      id={movie.id}
                    ></MovieItem>
                    <ImageContainer imgSrc={movie.img}></ImageContainer>
                    <ButtonContainer>
                      <Button
                        id={movie.id}
                        text={"Remove From Favorite"}
                        isFav={true}
                        handleFavoriteMovies={handleFavoriteMovies}
                      ></Button>
                    </ButtonContainer>
                  </MovieItemContainer>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <MovieItemContainer>
                    <MovieItem
                      title={movie.title}
                      year={movie.year}
                      id={movie.id}
                    ></MovieItem>
                    <ImageContainer imgSrc={movie.img}></ImageContainer>
                    <ButtonContainer>
                      <Button
                        id={movie.id}
                        text={"Add To Favorite"}
                        isFav={false}
                        handleFavoriteMovies={handleFavoriteMovies}
                      ></Button>
                    </ButtonContainer>
                  </MovieItemContainer>
                </React.Fragment>
              )
            )}
          </ul>
        )}
      </div>
    </React.Fragment>
  );
};

export default MovieList;
