import MovieForm from "../components/MovieForm";
import React from "react";

const AddOwnMoviePage = ({ searchInput, setsearchInput }) => {
  return (
    <React.Fragment>
      <MovieForm
        addNewMovie={true}
        searchInput={searchInput}
        setsearchInput={setsearchInput}
      ></MovieForm>
    </React.Fragment>
  );
};

export default AddOwnMoviePage;
