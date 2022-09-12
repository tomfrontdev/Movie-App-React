import { useDispatch } from "react-redux";
import { counterActions } from "../store/index.js";

const AddMovieButton = ({ text, searchInput }) => {
  const dispatch = useDispatch();

  const addNewMovie = () => {
    dispatch(counterActions.addData({ title: searchInput }));
  };
  return <p onClick={addNewMovie}>{text}</p>;
};

export default AddMovieButton;
