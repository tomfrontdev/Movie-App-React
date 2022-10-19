import MovieList from "../components/MovieList";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpinnerModal from "../components/SpinnerModal";
import MovieFetchError from "../components/MovieFetchError.js";
import { fetchMoviesData } from "../store/movies-actions";
import Pagination from "../components/Pagination";
import SortTypeList from "../components/SortTypeList";
import { moviesActions } from "../store/movies-slice";

const MainPage = () => {
  const dispatch = useDispatch();
  const moviesList = useSelector((state) => state.movies.movieList);
  const fetchingError = useSelector((state) => state.ui.error);
  const isdataLoading = useSelector((state) => state.ui.isdataLoading);
  const searchInput = useSelector((state) => state.movies.searchInput);
  const postsPerPageLargeScreen = useSelector(
    (state) => state.ui.postsPerPageLargeScreen
  );
  const postsPerPageSmallScreen = useSelector(
    (state) => state.ui.postsPerPageSmallScreen
  );
  const [foundMovies, setfoundMovies] = useState(true);
  const [isScreenLarge, setisScreenLarge] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchMoviesData("girls"));
    dispatch(moviesActions.setFetchedData(true));
    dispatch(moviesActions.setForm(true));
    dispatch(moviesActions.setsearchInput(""));
  }, [dispatch]);

  useEffect(() => {
    if (moviesList.length === 0 && searchInput !== "") {
      setfoundMovies(false);
    }
    if (moviesList.length > 0) {
      setfoundMovies(true);
    }
    if (window.innerWidth < 812) {
      setisScreenLarge(false);
    }
    if (window.innerWidth > 812) {
      setisScreenLarge(true);
    }
  }, [moviesList]);

  let currentPosts = 0;

  if (window.innerWidth < 812) {
    const lastPostIndex = currentPage * postsPerPageSmallScreen;
    const firstPostIndex = lastPostIndex - postsPerPageSmallScreen;
    currentPosts = moviesList.slice(firstPostIndex, lastPostIndex);
  }

  if (window.innerWidth > 812) {
    const lastPostIndex = currentPage * postsPerPageLargeScreen;
    const firstPostIndex = lastPostIndex - postsPerPageLargeScreen;
    currentPosts = moviesList.slice(firstPostIndex, lastPostIndex);
  }

  const changePage = (value) => {
    setCurrentPage(value);
  };

  return (
    <React.Fragment>
      <SortTypeList movieListname={"movieList"}></SortTypeList>
      <MovieList addedMovies={false} movie={currentPosts}></MovieList>
      <Pagination
        totalPosts={moviesList.length}
        postsPerPage={
          isScreenLarge ? postsPerPageLargeScreen : postsPerPageSmallScreen
        }
        currentPage={currentPage}
        handlePageChange={changePage}
      ></Pagination>
      {isdataLoading && <SpinnerModal></SpinnerModal>}
      {!foundMovies && !fetchingError && (
        <MovieFetchError text={"No Movies Found! :("}></MovieFetchError>
      )}
      {fetchingError && (
        <MovieFetchError text={fetchingError}></MovieFetchError>
      )}
    </React.Fragment>
  );
};

export default MainPage;
