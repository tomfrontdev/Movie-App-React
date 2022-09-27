import React from "react";
import MovieList from "../components/MovieList";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../components/Pagination";
import { uiActions } from "../store/ui-slice";

const FavoriteMoviesPage = () => {
  const dispatch = useDispatch();

  const favMovieList = useSelector((state) => state.movies.favMovieList);
  const currentPage = useSelector((state) => state.ui.currentPage);
  const postsPerPage = useSelector((state) => state.ui.postsPerPage);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = favMovieList.slice(firstPostIndex, lastPostIndex);

  const changePage = (value) => {
    dispatch(uiActions.setPage(value));
  };

  return (
    <React.Fragment>
      <MovieList movie={currentPosts} moviesToDisplay={true}></MovieList>
      <Pagination
        totalPosts={favMovieList.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        handlePageChange={changePage}
      ></Pagination>
    </React.Fragment>
  );
};

export default FavoriteMoviesPage;
