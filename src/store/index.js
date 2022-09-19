import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import moviesSlice from "./movies-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, movies: moviesSlice.reducer },
});

export default store;
