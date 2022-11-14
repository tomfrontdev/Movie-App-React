import React from 'react';
import MovieList from '../components/Movies/MovieList';
import Pagination from '../components/Pagination/Pagination';
import { moviesActions } from '../store/movies-slice';
import { useState, useEffect } from 'react';
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
  const favMovieList = useAppSelector((state) => state.movies.favMovieList);
  const [isScreenLarge, setisScreenLarge] = useState(true);

  const changePage = (value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    dispatch(moviesActions.setForm(false));
    if (window.innerWidth < 812) {
      setisScreenLarge(false);
    }
    if (window.innerWidth > 812) {
      setisScreenLarge(true);
    }
  }, [dispatch]);

  let currentPosts;

  if (window.innerWidth <= 812) {
    const lastPostIndex = currentPage * postsPerPageSmallScreen;
    const firstPostIndex = lastPostIndex - postsPerPageSmallScreen;
    currentPosts = favMovieList.slice(firstPostIndex, lastPostIndex);
  } else {
    const lastPostIndex = currentPage * postsPerPageLargeScreen;
    const firstPostIndex = lastPostIndex - postsPerPageLargeScreen;
    currentPosts = favMovieList.slice(firstPostIndex, lastPostIndex);
  }

  return (
    <React.Fragment>
      <MovieList movie={currentPosts} addedMovies={false}></MovieList>
      {favMovieList.length === 0 && (
        <ErrorMessages>No fav movies found!:(</ErrorMessages>
      )}
      <Pagination
        totalPosts={favMovieList.length}
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
