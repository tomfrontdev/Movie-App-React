import { configureStore } from '@reduxjs/toolkit';

import moviesSlice from './movies-slice';

const store = configureStore({
	reducer: { movies: moviesSlice.reducer },
});

export type RootState = typeof store;

export default store;
