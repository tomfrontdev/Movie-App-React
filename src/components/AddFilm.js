import styles from "./MovieSearch.module.css";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

const AddFilm = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [newData, setNewData] = useState([]);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.initialState);

  const incrementHandler = () => {
    dispatch({ type: "addData", payload: "Samochod" });
    console.log(counter);
  };

  return (
    <section className={styles.FormWrapper}>
      <div className={styles.Form}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.Forminput}>
            <input
              type="text"
              placeholder={"Enter movie title..."}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            ></input>
          </div>
          <div className={styles.Forminput}>
            <input
              type="text"
              placeholder={"Enter movie year..."}
              onChange={(e) => setYear(e.target.value)}
              value={year}
            ></input>
          </div>
          <div className={styles.Refresh}>
            <button onClick={incrementHandler}>
              <p>Add Film</p>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddFilm;
