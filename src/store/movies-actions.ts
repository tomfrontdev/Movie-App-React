import { moviesActions } from './movies-slice';

export const fetchMoviesData = (value: string) => {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    const fetchData = async () => {
      dispatch(moviesActions.showLoadingSpinner(true));
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${value}`
      );

      const data = await response.json();
      const movieData = data.map((movie: { show: object }) => movie.show);
      const transformedMovies = movieData.map(
        (movie: {
          id: number;
          premiered: number;
          name: string;
          image: { medium: string };
          rating: { average: string };
        }) => {
          return {
            id: movie.id,
            year: movie.premiered,
            title: movie.name,
            img: movie.image
              ? movie.image.medium
              : 'https://www.linkpicture.com/q/brokenimage.png',
            rating: movie.rating.average,
          };
        }
      );
      return transformedMovies;
    };

    try {
      const transformedMoviesData = await fetchData();
      dispatch(moviesActions.addMovies(transformedMoviesData));
      dispatch(moviesActions.showLoadingSpinner(false));
    } catch (error) {
      dispatch(moviesActions.showLoadingSpinner(false));
      dispatch(moviesActions.errorFetchingData(error.message));
    }
  };
};
