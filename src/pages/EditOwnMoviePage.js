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

  const params = useParams();

  const urlID = Number(params.productId);

  const submitHandlerDispatch = () => {
    dispatch(moviesActions.removeMovieTwo(urlID));
    dispatch(
      moviesActions.addOwnMovies({
        title: movieTitle,
        description: movieDescription,
        id: urlID,
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
