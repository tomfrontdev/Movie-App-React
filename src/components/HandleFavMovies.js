// import { moviesActions } from "../store/Movies";
// import { useSelector, useDispatch } from "react-redux";

// const handleFavoriteMovies = (id) => {
//   const dispatch = useDispatch();
//   const favMovieList = useSelector((state) => state.favMovieList);
//   const movieList = useSelector((state) => state.movieList);

//   const clickedMovie = movieList.find((movie) => movie.id === id);

//   if (!favMovieList.find((movie) => movie.id === id)) {
//     dispatch(moviesActions.AddMovieToFav(clickedMovie));
//   }
//   if (favMovieList.find((movie) => movie.id === id)) {
//     dispatch(moviesActions.RemoveMovieFromFav(clickedMovie));
//   }

//   return <div></div>;
// };

// export default handleFavoriteMovies;
