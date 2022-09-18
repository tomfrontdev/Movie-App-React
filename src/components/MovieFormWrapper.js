import styles from "../components/MovieFormWrapper.module.css";
import React from "react";

const MovieFormWrapper = ({ children }) => {
  return (
    <React.Fragment>
      <div className={styles.FormWrapper}>{children}</div>
    </React.Fragment>
  );
};

export default MovieFormWrapper;
