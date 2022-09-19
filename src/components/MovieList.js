import styles from "../components/MovieList.module.css";
import MovieItem from "./MovieItem";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { moviesActions } from "../store/movies-slice";
import { uiActions } from "../store/ui-slice";
import Button from "../UI/Button";
import MovieItemContainer from "../components/MovieItemContainer.js";
import ButtonContainer from "../components/ButtonContainer.js";
import ImageContainer from "../components/ImageContainer.js";
import { useState } from "react";
import RemoveItemModal from "../components/RemoveItemModal";

const MovieList = ({ movie, moviesToDisplay, addedMovies }) => {
  const dispatch = useDispatch();

  const movieList = useSelector((state) => state.movies.movieList);
  const favMovieList = useSelector((state) => state.movies.favMovieList);
  const ownMovieList = useSelector((state) => state.movies.ownMovieList);
  const showRemoveItemModal = useSelector(
    (state) => state.ui.showRemoveItemModal
  );

  const handleFavoriteMovies = (id) => {
    const clickedMovie = movieList.find((movie) => movie.id === id);

    if (!favMovieList.find((movie) => movie.id === id)) {
      dispatch(moviesActions.addMovieToFav(clickedMovie));
    }
    if (favMovieList.find((movie) => movie.id === id)) {
      dispatch(moviesActions.removeMovieFromFav(clickedMovie));
    }
  };

  const toggleModal = () => {
    dispatch(uiActions.toggleRemoveModal());
  };

  const removeFromAddedMovies = () => {
    toggleModal();
  };

  const handleMovieToDelete = (id) => {
    toggleModal();

    const clickedMovie = ownMovieList.find((movie) => movie.id === id);
    dispatch(moviesActions.addlastClickedMovieToRemove(clickedMovie));
  };

  return (
    <React.Fragment>
      {moviesToDisplay && (
        <div className={styles.MovieList}>
          <ul>
            {movie.map((movie) =>
              favMovieList.find((favMovie) => favMovie.id === movie.id) ? (
                <MovieItemContainer>
                  <MovieItem
                    title={movie.title}
                    year={movie.year}
                    id={movie.id}
                    moviesToDisplay={moviesToDisplay}
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
              ) : (
                <MovieItemContainer>
                  <MovieItem
                    title={movie.title}
                    moviesToDisplay={moviesToDisplay}
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
              )
            )}
          </ul>
        </div>
      )}
      {addedMovies && (
        <div className={styles.MovieList}>
          <ul>
            {movie.map((movie) => (
              <MovieItemContainer>
                <MovieItem
                  title={movie.title}
                  addedMovies={true}
                  description={movie.description}
                ></MovieItem>
                <ButtonContainer>
                  <Button
                    id={movie.id}
                    isFav={false}
                    text={"Edit Movie"}
                    handleFavoriteMovies={removeFromAddedMovies}
                  ></Button>
                  <Button
                    id={movie.id}
                    isFav={true}
                    text={"Remove Movie"}
                    handleFavoriteMovies={handleMovieToDelete}
                  ></Button>
                </ButtonContainer>
              </MovieItemContainer>
            ))}
          </ul>
        </div>
      )}
      {showRemoveItemModal && (
        <React.Fragment>
          <RemoveItemModal movie={ownMovieList}></RemoveItemModal>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default MovieList;
