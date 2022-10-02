import styles from "../components/MovieAddFilmForm.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { moviesActions } from "../store/movies-slice";
import { useSelector } from "react-redux";
import Button from "../UI/Button";
import btn from "../UI/Button.module.css";

const MovieAddFilmForm = ({ title, description, submitHandlerDispatch }) => {
  const movieTitle = useSelector((state) => state.movies.movieTitle);
  const movieDescription = useSelector(
    (state) => state.movies.movieDescription
  );
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <section className={styles.FormWrapper}>
        <form
          className={styles.Form}
          onSubmit={(e) => {
            e.preventDefault();
            submitHandlerDispatch();
            dispatch(moviesActions.setTitle(""));
            dispatch(moviesActions.setDescription(""));
          }}
        >
          <div className={styles.FormAddFilmWrapper}>
            <div className={styles.FormInputWrapper}>
              <input
                type="text"
                onChange={(e) =>
                  dispatch(moviesActions.setTitle(e.target.value))
                }
                placeholder={"Enter movie title..."}
                value={title}
              ></input>
            </div>
            <div className={styles.FormInputWrapper}>
              <input
                type="text"
                onChange={(e) =>
                  dispatch(moviesActions.setDescription(e.target.value))
                }
                placeholder={"Enter movie description..."}
                value={description}
              ></input>
            </div>
            <div className={styles.FormSubmitBtnWrapper}>
              <Button type="submit" classTitle={btn.greenBorder}>
                Add
              </Button>
            </div>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default MovieAddFilmForm;
