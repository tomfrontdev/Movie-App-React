import MovieList from "../components/MovieList";
import { useSelector, useDispatch } from "react-redux";
import { moviesActions } from "../store/movies-slice";
import { useEffect } from "react";

const AddedFilms = () => {
  const dispatch = useDispatch();
  const ownMovieList = useSelector((state) => state.movies.ownMovieList);

  useEffect(() => {
    dispatch(moviesActions.setFetchedData(false));
    dispatch(moviesActions.setForm(true));
  }, [dispatch]);

  return <MovieList movie={ownMovieList} addedMovies={true}></MovieList>;
};

export default AddedFilms;
