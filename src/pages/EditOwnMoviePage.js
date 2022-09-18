import React from "react";
import MovieFormWrapper from "../components/MovieFormWrapper";
import MovieAddFilmForm from "../components/MovieAddFilmForm";

const EditOwnMoviePage = () => {
  return (
    <React.Fragment>
      <MovieFormWrapper>
        <MovieAddFilmForm text={"Edit"}></MovieAddFilmForm>
      </MovieFormWrapper>
    </React.Fragment>
  );
};

export default EditOwnMoviePage;
