import MovieList from "../components/MovieList";
import { useSelector } from "react-redux";

const AddedFilms = () => {
  const movieData = useSelector((state) => state.arr);
  console.log(movieData);

  return (
    <MovieList addedOwnMoviesData={movieData} addedOwnMovies={true}></MovieList>
  );
};

export default AddedFilms;
