import MovieList from "../components/MovieList";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpinnerModal from "../components/SpinnerModal";
import MovieFetchError from "../components/MovieFetchError.js";
import { fetchMoviesData } from "../store/movies-actions";
import Pagination from "../components/Pagination";
import { uiActions } from "../store/ui-slice";

const MainPage = () => {
  const dispatch = useDispatch();
  const moviesList = useSelector((state) => state.movies.movieList);
  const fetchingError = useSelector((state) => state.ui.error);
  const isdataLoading = useSelector((state) => state.ui.isdataLoading);
  const searchInput = useSelector((state) => state.movies.searchInput);
  const currentPage = useSelector((state) => state.ui.currentPage);
  const postsPerPage = useSelector((state) => state.ui.postsPerPage);
  const [moviesToDisplay, setMoviesToDisplay] = useState(true);

  useEffect(() => {
    dispatch(fetchMoviesData("girls"));
  }, [dispatch]);

  useEffect(() => {
    if (moviesList.length === 0 && searchInput !== "") {
      setMoviesToDisplay(false);
    }
    if (moviesList.length > 0) {
      setMoviesToDisplay(true);
    }
  }, [moviesList]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = moviesList.slice(firstPostIndex, lastPostIndex);

  const changePage = (value) => {
    dispatch(uiActions.setPage(value));
  };

  return (
    <React.Fragment>
      <MovieList
        moviesToDisplay={moviesToDisplay}
        movie={currentPosts}
      ></MovieList>
      <Pagination
        totalPosts={moviesList.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        handlePageChange={changePage}
      ></Pagination>
      {isdataLoading && <SpinnerModal></SpinnerModal>}
      {!moviesToDisplay && !fetchingError && (
        <MovieFetchError text={"No Movies Found! :("}></MovieFetchError>
      )}
      {fetchingError && (
        <MovieFetchError text={fetchingError}></MovieFetchError>
      )}
    </React.Fragment>
  );
};

export default MainPage;
