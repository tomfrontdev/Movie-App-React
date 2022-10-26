import React from 'react';
import styles from '../Movies/SingleMovie.module.css';
import Button from '../Buttons/Button';
import btn from '../Buttons/Button.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { moviesActions } from '../../store/movies-slice';
import { MdFavoriteBorder, MdFavorite, MdDeleteOutline } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

const SingleMovie = ({
    title,
    addedMovies,
    id,
    imgSrc,
    isFav,
    score,
    redirectToForm,
}) => {
    const dispatch = useDispatch();
    const IMAGE_BASE_URL = imgSrc;
    const movieList = useSelector((state) => state.movies.movieList);
    const favMovieList = useSelector((state) => state.movies.favMovieList);
    const ownMovieList = useSelector((state) => state.movies.ownMovieList);

    const handleFavoriteMovies = (id) => {
        const selectedMovie = movieList.find((movie) => movie.id === id);

        if (!favMovieList.find((movie) => movie.id === id)) {
            dispatch(moviesActions.addMovieToFav(selectedMovie));
        }

        if (favMovieList.find((movie) => movie.id === id)) {
            dispatch(moviesActions.removeMovieFromFav(id));
        }
    };

    const handleMovieToDelete = (id) => {
        dispatch(moviesActions.toggleRemoveModal());

        const selectedMovie = ownMovieList.find((movie) => movie.id === id);

        dispatch(moviesActions.setclickedMovie(selectedMovie));
    };

    return (
        <React.Fragment>
            <li>
                <div
                    style={{
                        backgroundImage: `url(
              ${IMAGE_BASE_URL}
            )`,
                    }}
                    className={styles.Moviecontainer}
                    onClick={
                        !addedMovies ? () => handleFavoriteMovies(id) : null
                    }
                >
                    <div className={styles.Moviedatacontainer}>
                        <div className={styles.Moviescorecontainer}>
                            <p>{score}/10</p>
                        </div>
                        <div className={styles.Moviebtncontainer}>
                            {!addedMovies ? (
                                <Button
                                    classTitle={btn.Btn + ' ' + btn.noBorder}
                                >
                                    {isFav ? (
                                        <MdFavorite
                                            className={btn.Icon}
                                        ></MdFavorite>
                                    ) : (
                                        <MdFavoriteBorder
                                            className={btn.Icon}
                                        ></MdFavoriteBorder>
                                    )}
                                </Button>
                            ) : (
                                <React.Fragment>
                                    <Button
                                        onClick={() => handleMovieToDelete(id)}
                                        classTitle={
                                            btn.Btn +
                                            ' ' +
                                            btn.redBorder +
                                            ' ' +
                                            btn.setMargin
                                        }
                                    >
                                        <MdDeleteOutline
                                            className={btn.Icon}
                                        ></MdDeleteOutline>
                                    </Button>
                                    <Button
                                        onClick={() => redirectToForm(id)}
                                        classTitle={
                                            btn.Btn + ' ' + btn.greenBorder
                                        }
                                    >
                                        <FiEdit className={btn.Icon}></FiEdit>
                                    </Button>
                                </React.Fragment>
                            )}
                        </div>
                        <div className={styles.Movieanimateddiv}>
                            <p className={styles.Movietitle}> {title}</p>
                        </div>
                    </div>
                </div>
            </li>
        </React.Fragment>
    );
};

export default SingleMovie;
