import React from "react";
import styles from "../UI/Button.module.css";
import { useDispatch } from "react-redux";
const Button = ({ text, favorite, id, handleFavoriteMovies, searchInput }) => {
  const dispatch = useDispatch();

  // const addNewMovieToList = () => {
  //   dispatch(counterActions.addFavMovie({ title: searchInput }));
  // };
  return (
    <React.Fragment>
      <button
        className={`${styles.Button} ${favorite && styles.Removefromfavorite}`}
        onClick={() => handleFavoriteMovies(id)}
      >
        {!favorite && <p>{text}</p>}
        {favorite && <p>{"Remove From Favorite"}</p>}
      </button>
    </React.Fragment>
  );
};

export default Button;
