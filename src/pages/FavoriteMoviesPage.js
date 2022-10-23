import React from "react";
import MovieList from "../components/Movies/MovieList";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../components/Pagination/Pagination";
import { moviesActions } from "../store/movies-slice";
import { useState, useEffect } from "react";
import SortingMovie from "../components/Forms/SortingMovie";
import ErrorMessages from "../components/ErrorMessages/ErrorMessages";

const FavoriteMoviesPage = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPageLargeScreen = useSelector(
    (state) => state.movies.postsPerPageLargeScreen
  );
  const postsPerPageSmallScreen = useSelector(
    (state) => state.movies.postsPerPageSmallScreen
  );
  const filteredMovies = useSelector((state) => state.movies.filteredMovies);
  const [isScreenLarge, setisScreenLarge] = useState(true);

  const changePage = (value) => {
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

  let currentPosts = 0;

  if (window.innerWidth < 812) {
    const lastPostIndex = currentPage * postsPerPageSmallScreen;
    const firstPostIndex = lastPostIndex - postsPerPageSmallScreen;
    currentPosts = filteredMovies.slice(firstPostIndex, lastPostIndex);
  }

  if (window.innerWidth > 812) {
    const lastPostIndex = currentPage * postsPerPageLargeScreen;
    const firstPostIndex = lastPostIndex - postsPerPageLargeScreen;
    currentPosts = filteredMovies.slice(firstPostIndex, lastPostIndex);
  }

  return (
    <React.Fragment>
      <SortingMovie movieListname={"filteredMovies"}></SortingMovie>
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
