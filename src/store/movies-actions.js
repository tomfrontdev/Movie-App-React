import { uiActions } from "./ui-slice";
import { moviesActions } from "./movies-slice";

export const fetchMoviesData = (value) => {
  return async (dispatch) => {
    const fetchData = async () => {
      dispatch(uiActions.showLoadingSpinner(true));
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${value}`
      );

      const data = await response.json();
      const movieData = data.map((movie) => movie.show);
      const transformedMovies = movieData.map((movie) => {
        return {
          id: movie.id,
          year: movie.premiered,
          title: movie.name,
          favorite: false,
          img: movie.image ? movie.image.medium : "brokenimage.svg",
        };
      });
      return transformedMovies;
    };

    try {
      const transformedMoviesData = await fetchData();
      dispatch(moviesActions.addMovies(transformedMoviesData));
      dispatch(uiActions.showLoadingSpinner(false));
    } catch (error) {
      console.log(error);
      dispatch(uiActions.showLoadingSpinner(false));
      dispatch(uiActions.errorFetchingData(error.message));
    }
  };
};
