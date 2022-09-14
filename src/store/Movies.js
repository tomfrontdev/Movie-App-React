import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  movieList: [],
  favMovieList: [],
};

const Movies = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    AddMovies(state, action) {
      const movieList = action.payload;
      return {
        ...state,
        movieList,
      };
    },
    AddMovieToFav(state, action) {
      const movieItem = action.payload;
      state.favMovieList = [...state.favMovieList, movieItem];
    },
    RemoveMovieFromFav(state, action) {
      const movieItem = action.payload;
      console.log(movieItem);
      state.favMovieList = state.favMovieList.filter(
        (movie) => movie.id !== movieItem.id
      );
    },
  },
});

const store = configureStore({ reducer: Movies.reducer });

export const moviesActions = Movies.actions;

export default store;
