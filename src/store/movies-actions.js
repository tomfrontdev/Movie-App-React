import { moviesActions } from "./movies-slice";

export const fetchMoviesData = (value) => {
  return async (dispatch) => {
    const fetchData = async () => {
      dispatch(moviesActions.showLoadingSpinner(true));
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
          rating: movie.rating.average,
        };
      });
      return transformedMovies;
    };

    try {
      const transformedMoviesData = await fetchData();
      dispatch(moviesActions.addMovies(transformedMoviesData));
      dispatch(moviesActions.showLoadingSpinner(false));
    } catch (error) {
      console.log(error);
      dispatch(moviesActions.showLoadingSpinner(false));
      dispatch(moviesActions.errorFetchingData(error.message));
    }
  };
};
