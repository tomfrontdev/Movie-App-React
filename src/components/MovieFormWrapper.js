import styles from "../components/MovieFormWrapper.module.css";
import React from "react";

const MovieFormWrapper = ({ children }) => {
  return (
    <React.Fragment>
      <section className={styles.FormWrapper}>{children}</section>
    </React.Fragment>
  );
};

export default MovieFormWrapper;
