import React, { useEffect } from "react";
import MovieFormWrapper from "../components/MovieFormWrapper";
import MovieAddFilmForm from "../components/MovieAddFilmForm";
import { useDispatch } from "react-redux";
import { moviesActions } from "../store/movies-slice";

import { useSelector } from "react-redux";

const AddOwnMoviePage = () => {
  const dispatch = useDispatch();
  const movieTitle = useSelector((state) => state.movies.movieTitle);
  const movieDescription = useSelector(
    (state) => state.movies.movieDescription
  );

  const submitHandlerDispatch = () => {
    dispatch(
      moviesActions.addOwnMovies({
        title: movieTitle,
        description: movieDescription,
        id: Math.floor(Math.random() * (999 - 1) + 1),
      })
    );
  };

  return (
    <React.Fragment>
      <MovieFormWrapper>
        <MovieAddFilmForm
          text={"Add"}
          title={movieTitle}
          description={movieDescription}
          submitHandlerDispatch={submitHandlerDispatch}
        ></MovieAddFilmForm>
      </MovieFormWrapper>
    </React.Fragment>
  );
};

export default AddOwnMoviePage;
