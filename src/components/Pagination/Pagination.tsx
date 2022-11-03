import styles from './Pagination.module.css';
import Button from '../Buttons/Button';
import btn from '../Buttons/Button.module.css';
import { useAppSelector } from '../../store/hooks';

type AppProps = {
  totalPosts: number;
  postsPerPage: number;
  handlePageChange: (page: number) => void;
  currentPage: number;
};

const Pagination = ({
  totalPosts,
  postsPerPage,
  handlePageChange,
  currentPage,
}: AppProps) => {
  const isdayModeActive = useAppSelector((state) => state.movies.dayMode);
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
