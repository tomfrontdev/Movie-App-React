import React from "react";
import MovieFormWrapper from "../components/MovieFormWrapper";
import MovieAddFilmForm from "../components/MovieAddFilmForm";

const AddOwnMoviePage = () => {
  return (
    <React.Fragment>
      <MovieFormWrapper>
        <MovieAddFilmForm text={"Add"}></MovieAddFilmForm>
      </MovieFormWrapper>
    </React.Fragment>
  );
};

export default AddOwnMoviePage;
