import React from "react";
import MovieFormWrapper from "../components/MovieFormWrapper";
import MovieAddFilmForm from "../components/MovieAddFilmForm";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { moviesActions } from "../store/movies-slice";

const EditOwnMoviePage = () => {
  const dispatch = useDispatch();
  const movieTitle = useSelector((state) => state.movies.movieTitle);
  const movieDescription = useSelector(
    (state) => state.movies.movieDescription
  );
  const ownMovieList = useSelector((state) => state.movies.ownMovieList);

  const params = useParams();

  const urlID = Number(params.productId);

  const index = ownMovieList.findIndex((movie) => movie.id === urlID);

  const submitHandlerDispatch = () => {
    dispatch(
      moviesActions.editMovie({
        id: index,
        title: movieTitle,
        description: movieDescription,
      })
    );
  };

  return (
    <React.Fragment>
      <MovieFormWrapper>
        <MovieAddFilmForm
          text={"Edit"}
          title={movieTitle}
          description={movieDescription}
          editedMovieID={urlID}
          submitHandlerDispatch={submitHandlerDispatch}
        ></MovieAddFilmForm>
      </MovieFormWrapper>
    </React.Fragment>
  );
};

export default EditOwnMoviePage;
