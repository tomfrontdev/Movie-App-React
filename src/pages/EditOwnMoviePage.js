import React, { useEffect } from "react";
import MovieAddFilmForm from "../components/MovieAddFilmForm";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { moviesActions } from "../store/movies-slice";

const EditOwnMoviePage = () => {
  const dispatch = useDispatch();

  const ownMovieList = useSelector((state) => state.movies.ownMovieList);

  const params = useParams();

  const urlID = Number(params.productId);

  const index = ownMovieList.findIndex((movie) => movie.id === urlID);

  useEffect(() => {
    dispatch(moviesActions.setFetchedData(true));
    dispatch(moviesActions.setForm(false));
  }, [dispatch]);

  return (
    <React.Fragment>
      <MovieAddFilmForm
        text={"Edit"}
        editMovie={true}
        index={index}
        editedMovieID={urlID}
      ></MovieAddFilmForm>
    </React.Fragment>
  );
};

export default EditOwnMoviePage;
