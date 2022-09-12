import React from "react";

const MovieFetchError = (props) => {
  return (
    <React.Fragment>
      <div>
        {!props.moviesToDisplay && !props.error && <p>No movies found!</p>}
        {props.error && <p>Wrong URL! </p>}
      </div>
    </React.Fragment>
  );
};

export default MovieFetchError;
