import MovieList from "../components/MovieList";
import { useSelector } from "react-redux";
import RemoveItemModal from "../components/RemoveItemModal";

const AddedFilms = () => {
  const ownMovieList = useSelector((state) => state.ownMovieList);
  console.log(ownMovieList);

  return <MovieList movie={ownMovieList} addedMovies={true}></MovieList>;
  // return <RemoveItemModal></RemoveItemModal>;
};

export default AddedFilms;
