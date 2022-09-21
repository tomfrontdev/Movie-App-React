import styles from "../components/MovieList.module.css";
import MovieItem from "./MovieItem";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { moviesActions } from "../store/movies-slice";
import { uiActions } from "../store/ui-slice";
import Button from "../UI/Button";
import { Redirect } from "react-router-dom";
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
  const clickedMovie = useSelector((state) => state.movies.clickedMovie);
  const [redirect, setRedirect] = useState(true);
  const showRemoveItemModal = useSelector(
    (state) => state.ui.showRemoveItemModal
  );

  const handleFavoriteMovies = (id) => {
    const selectedMovie = movieList.find((movie) => movie.id === id);

    if (!favMovieList.find((movie) => movie.id === id)) {
      dispatch(moviesActions.addMovieToFav(selectedMovie));
    }
    if (favMovieList.find((movie) => movie.id === id)) {
      dispatch(moviesActions.removeMovieFromFav(selectedMovie));
    }
  };

  const toggleModal = () => {
    dispatch(uiActions.toggleRemoveModal());
  };

  const redirectToForm = (id) => {
    setRedirect(false);
    const selectedMovie = ownMovieList.find((movie) => movie.id === id);
    dispatch(moviesActions.setEditMovie(true));
    dispatch(moviesActions.setclickedMovie(selectedMovie));
    dispatch(moviesActions.setTitle(selectedMovie.title));
    dispatch(moviesActions.setDescription(selectedMovie.description));
  };

  const handleMovieToDelete = (id) => {
    toggleModal();

    const selectedMovie = ownMovieList.find((movie) => movie.id === id);

    dispatch(moviesActions.setclickedMovie(selectedMovie));
  };

  return (
    <React.Fragment>
      {moviesToDisplay && (
        <section className={styles.MovieList}>
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
        </section>
      )}
      {addedMovies && (
        <section className={styles.MovieList}>
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
                    handleFavoriteMovies={redirectToForm}
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
        </section>
      )}
      {showRemoveItemModal && (
        <React.Fragment>
          <RemoveItemModal movie={ownMovieList}></RemoveItemModal>
        </React.Fragment>
      )}
      {!redirect && <Redirect to={`/editfilm/${clickedMovie.id}`}></Redirect>}
    </React.Fragment>
  );
};

export default MovieList;
