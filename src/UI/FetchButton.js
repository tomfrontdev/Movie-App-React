const FetchButton = ({ text, fetchMoviesHandler, searchInput }) => {
  return (
    <div onClick={() => fetchMoviesHandler(searchInput)}>
      <p>{text}</p>
    </div>
  );
};

export default FetchButton;
