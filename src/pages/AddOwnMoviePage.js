import React, { useEffect } from "react";
import MovieAddFilmForm from "../components/MovieAddFilmForm";
import { useDispatch } from "react-redux";
import { moviesActions } from "../store/movies-slice";

const AddOwnMoviePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesActions.setFetchedData(true));
    dispatch(moviesActions.setForm(false));
  }, [dispatch]);

  return (
    <React.Fragment>
      <MovieAddFilmForm></MovieAddFilmForm>
    </React.Fragment>
  );
};

export default AddOwnMoviePage;
