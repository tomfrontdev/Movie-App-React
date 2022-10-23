import React from "react";
import styles from "../ErrorMessages/ErrorMessages.module.css";

import { useSelector } from "react-redux";

const ErrorMessages = ({ children, classTitle }) => {
  const isdayModeActive = useSelector((state) => state.movies.dayMode);

  return (
    <React.Fragment>
      {classTitle && <p className={classTitle}>{children}</p>}
      {!classTitle && (
        <div className={styles.ErrorTextWrapper}>
          <p
            style={{
              color: !classTitle && isdayModeActive ? "black" : "white",
            }}
          >
            {children}
          </p>
        </div>
      )}
    </React.Fragment>
  );
};

export default ErrorMessages;
