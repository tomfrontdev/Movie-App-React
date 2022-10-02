import React from "react";
import MovieList from "../components/MovieList";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../components/Pagination";
import { uiActions } from "../store/ui-slice";
import { moviesActions } from "../store/movies-slice";
import { useEffect } from "react";

const FavoriteMoviesPage = () => {
  const dispatch = useDispatch();

  const favMovieList = useSelector((state) => state.movies.favMovieList);
  const currentPage = useSelector((state) => state.ui.currentPage);
  const postsPerPage = useSelector((state) => state.ui.postsPerPage);
  const isFormFetching = useSelector((state) => state.movies.isFormFetching);
  const filteredMovies = useSelector((state) => state.movies.filteredMovies);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredMovies.slice(firstPostIndex, lastPostIndex);

  const changePage = (value) => {
    dispatch(uiActions.setPage(value));
  };

  useEffect(() => {
    dispatch(moviesActions.setFetchedData(false));
  }, [dispatch]);

  console.log(filteredMovies);
  return (
    <React.Fragment>
      <MovieList movie={currentPosts} addedMovies={false}></MovieList>
      <Pagination
        totalPosts={filteredMovies.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        handlePageChange={changePage}
      ></Pagination>
    </React.Fragment>
  );
};

export default FavoriteMoviesPage;
