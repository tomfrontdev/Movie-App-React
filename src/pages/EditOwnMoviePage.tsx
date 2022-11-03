import React, { useEffect } from 'react';
import AddOrEditMovie from '../components/Forms/AddOrEditMovie';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { useParams } from 'react-router-dom';
import { moviesActions } from '../store/movies-slice';

const EditOwnMoviePage = () => {
  const dispatch = useAppDispatch();

  const ownMovieList = useAppSelector((state) => state.movies.ownMovieList);

  const params = useParams();

  const urlID = Number(params.productId);

  const index = ownMovieList.findIndex((movie) => movie.id === urlID);

  useEffect(() => {
    dispatch(moviesActions.setFetchedData(true));
    dispatch(moviesActions.setForm(false));
  }, [dispatch]);

  return (
    <React.Fragment>
      <AddOrEditMovie
        text={'Edit'}
        editMovie={true}
        index={index}
      ></AddOrEditMovie>
    </React.Fragment>
  );
};

export default EditOwnMoviePage;
