import styles from "../components/MovieList.module.css";
import MovieItem from "./MovieItem";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { moviesActions } from "../store/Movies";
import Button from "../UI/Button";
import MovieItemContainer from "../components/MovieItemContainer.js";
import ButtonContainer from "../components/ButtonContainer.js";
import ImageContainer from "../components/ImageContainer.js";

const MovieList = ({ movie }) => {
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
      </div>
    </React.Fragment>
  );
};

export default MovieList;
