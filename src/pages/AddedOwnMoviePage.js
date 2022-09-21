import MovieList from "../components/MovieList";
import { useSelector } from "react-redux";

const AddedFilms = () => {
  const ownMovieList = useSelector((state) => state.movies.ownMovieList);

  return <MovieList movie={ownMovieList} addedMovies={true}></MovieList>;
};

export default AddedFilms;
