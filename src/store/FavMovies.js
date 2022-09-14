import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  arr: [],
};

const FavMovies = createSlice({
  name: "AddFavMovieSlice",
  initialState,
  reducers: {
    addFavMovie(state, action) {
      return {
        ...state,
        arr: [...state.arr, action.payload],
      };
    },
  },
});

//

const store = configureStore({ reducer: FavMovies.reducer });

export const counterActions = FavMovies.actions;

export default store;
