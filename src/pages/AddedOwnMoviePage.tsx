import MovieList from '../components/Movies/MovieList';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { moviesActions } from '../store/movies-slice';
import React, { useEffect } from 'react';
import { ErrorMessages } from '../components/ErrorMessages';

const AddedFilms = () => {
  const dispatch = useAppDispatch();
  const ownMovieList = useAppSelector((state) => state.movies.ownMovieList);

  useEffect(() => {
    dispatch(moviesActions.setFetchedData(false));
    dispatch(moviesActions.setForm(false));
  }, [dispatch]);

  return (
    <React.Fragment>
      <MovieList movie={ownMovieList} addedMovies={true}></MovieList>
      {ownMovieList.length === 0 && (
        <ErrorMessages>No movies added! :(</ErrorMessages>
      )}
    </React.Fragment>
  );
};

export default AddedFilms;
