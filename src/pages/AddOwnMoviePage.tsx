import React, { useEffect } from 'react';
import AddOrEditMovie from '../components/Forms/AddOrEditMovie';
import { useDispatch } from 'react-redux';
import { moviesActions } from '../store/movies-slice';

const AddOwnMoviePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesActions.setFetchedData(true));
    dispatch(moviesActions.setForm(false));
  }, [dispatch]);

  return (
    <React.Fragment>
      <AddOrEditMovie text="Add" editMovie={false}></AddOrEditMovie>
    </React.Fragment>
  );
};

export default AddOwnMoviePage;
