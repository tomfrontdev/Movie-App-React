import React from "react";
import styles from "../components/Pagination.module.css";
import Button from "../UI/Button";
import btn from "../UI/Button.module.css";
import { useSelector } from "react-redux";

const Pagination = ({
  totalPosts,
  postsPerPage,
  handlePageChange,
  currentPage,
}) => {
  const isdayModeActive = useSelector((state) => state.movies.dayMode);
  const colors = isdayModeActive ? `${btn.nightMode}` : `${btn.dayMode}`;

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className={styles.Pagination}>
      {pages.map((page, index) => {
        if (page === currentPage) {
          return (
            <Button
              classTitle={`${btn.PaginationBtn} ${btn.currentPageShadow} ${colors}`}
              key={index}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Button>
          );
        }
        if (page !== currentPage) {
          return (
            <Button
              classTitle={`${btn.PaginationBtn} ${colors}`}
              key={index}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Button>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Pagination;
