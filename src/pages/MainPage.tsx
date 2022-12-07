import MovieList from '../components/Movies/MovieList';
import React from 'react';
import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner/LoadingSpinner';
import ErrorMessages from '../components/ErrorMessages/ErrorMessages';
import { fetchMoviesData } from '../store/movies-actions';
import Pagination from '../components/Pagination/Pagination';
import SortingMovie from '../components/Forms/SortingMovie';
import { moviesActions } from '../store/movies-slice';
import { useAppSelector, useAppDispatch } from '../store/hooks';

const MainPage = () => {
  const dispatch = useAppDispatch();

  const moviesList = useAppSelector((state) => state.movies.movieList);
  const fetchingError = useAppSelector((state) => state.movies.error);
  const isdataLoading = useAppSelector((state) => state.movies.isdataLoading);
  const moviesFound = useAppSelector((state) => state.movies.moviesFound);

  const postsPerPageLargeScreen = useAppSelector(
    (state) => state.movies.postsPerPageLargeScreen
  );
  const postsPerPageSmallScreen = useAppSelector(
    (state) => state.movies.postsPerPageSmallScreen
  );
  const [isScreenLarge, setisScreenLarge] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const searchInput = useAppSelector((state) => state.movies.searchInput);

  useEffect(() => {
    if (searchInput === '') {
      dispatch(fetchMoviesData('girls'));
    } else {
      dispatch(fetchMoviesData(searchInput));
    }

    dispatch(moviesActions.setFetchedData(true));
    dispatch(moviesActions.setForm(true));
  }, [dispatch, searchInput]);

  useEffect(() => {
    if (window.innerWidth < 812) {
      setisScreenLarge(false);
    }
    if (window.innerWidth > 812) {
      setisScreenLarge(true);
    }
  }, [moviesList]);

  let currentPosts;

  if (window.innerWidth <= 812) {
    const lastPostIndex = currentPage * postsPerPageSmallScreen;
    const firstPostIndex = lastPostIndex - postsPerPageSmallScreen;
    currentPosts = moviesList.slice(firstPostIndex, lastPostIndex);
  } else {
    const lastPostIndex = currentPage * postsPerPageLargeScreen;
    const firstPostIndex = lastPostIndex - postsPerPageLargeScreen;
    currentPosts = moviesList.slice(firstPostIndex, lastPostIndex);
  }

  const changePage = (value: number) => {
    setCurrentPage(value);
  };

  return (
    <React.Fragment>
      <SortingMovie></SortingMovie>
      <MovieList addedMovies={false} movie={currentPosts}></MovieList>
      <Pagination
        totalPosts={moviesList.length}
        postsPerPage={
          isScreenLarge ? postsPerPageLargeScreen : postsPerPageSmallScreen
        }
        currentPage={currentPage}
        handlePageChange={changePage}
      ></Pagination>
      {isdataLoading && <Spinner></Spinner>}
      {!moviesFound && !fetchingError && (
        <ErrorMessages>No movies found!:(</ErrorMessages>
      )}
      {fetchingError && <ErrorMessages>{fetchingError}</ErrorMessages>}
    </React.Fragment>
  );
};

export default MainPage;
