import MovieList from "../components/MovieList";
import { useSelector, useDispatch } from "react-redux";
import { moviesActions } from "../store/movies-slice";
import React, { useEffect } from "react";
import MovieFetchError from "../components/MovieFetchError";

const AddedFilms = () => {
  const dispatch = useDispatch();
  const ownMovieList = useSelector((state) => state.movies.ownMovieList);

  useEffect(() => {
    dispatch(moviesActions.setFetchedData(false));
    dispatch(moviesActions.setForm(true));
  }, [dispatch]);

  return (
    <React.Fragment>
      <MovieList movie={ownMovieList} addedMovies={true}></MovieList>
      {ownMovieList.length === 0 && (
        <MovieFetchError text={"No Movies Added! :("}></MovieFetchError>
      )}
    </React.Fragment>
  );
};

export default AddedFilms;
