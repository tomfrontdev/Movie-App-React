import React from 'react';
import MovieList from '../components/Movies/MovieList';
import Pagination from '../components/Pagination/Pagination';
import { moviesActions } from '../store/movies-slice';
import { useState, useEffect } from 'react';
import SortingMovie from '../components/Forms/SortingMovie';
import ErrorMessages from '../components/ErrorMessages/ErrorMessages';
import { useAppSelector, useAppDispatch } from '../store/hooks';

const FavoriteMoviesPage = () => {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPageLargeScreen = useAppSelector(
    (state) => state.movies.postsPerPageLargeScreen
  );
  const postsPerPageSmallScreen = useAppSelector(
    (state) => state.movies.postsPerPageSmallScreen
  );
  const filteredMovies = useAppSelector((state) => state.movies.filteredMovies);
  const [isScreenLarge, setisScreenLarge] = useState(true);

  const changePage = (value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    dispatch(moviesActions.setFetchedData(false));
    dispatch(moviesActions.setForm(true));
    if (window.innerWidth < 812) {
      setisScreenLarge(false);
    }
    if (window.innerWidth > 812) {
      setisScreenLarge(true);
    }
  }, [dispatch]);

  let currentPosts;

  if (window.innerWidth >= 812) {
    const lastPostIndex = currentPage * postsPerPageSmallScreen;
    const firstPostIndex = lastPostIndex - postsPerPageSmallScreen;
    currentPosts = filteredMovies.slice(firstPostIndex, lastPostIndex);
  } else {
    const lastPostIndex = currentPage * postsPerPageLargeScreen;
    const firstPostIndex = lastPostIndex - postsPerPageLargeScreen;
    currentPosts = filteredMovies.slice(firstPostIndex, lastPostIndex);
  }

  return (
    <React.Fragment>
      <SortingMovie movieListname={'filteredMovies'}></SortingMovie>
      <MovieList movie={currentPosts} addedMovies={false}></MovieList>
      {filteredMovies.length === 0 && (
        <ErrorMessages>No fav movies found!:(</ErrorMessages>
      )}
      <Pagination
        totalPosts={filteredMovies.length}
        postsPerPage={
          isScreenLarge ? postsPerPageLargeScreen : postsPerPageSmallScreen
        }
        currentPage={currentPage}
        handlePageChange={changePage}
      ></Pagination>
    </React.Fragment>
  );
};

export default FavoriteMoviesPage;
