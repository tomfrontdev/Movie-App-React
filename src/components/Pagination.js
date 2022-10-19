import React from "react";
import styles from "../components/Pagination.module.css";

const Pagination = ({
  totalPosts,
  postsPerPage,
  handlePageChange,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className={styles.Pagination}>
      {pages.map((page, index) => {
        if (page === currentPage) {
          return (
            <button
              className={styles.Btn + " " + styles.Redbtn}
              key={index}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          );
        }
        if (page !== currentPage) {
          return (
            <button
              className={styles.Btn + " " + styles.Greenbtn}
              key={index}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          );
        }
      })}
    </div>
  );
};

export default Pagination;
