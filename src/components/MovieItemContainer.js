import styles from "../components/MovieItemContainer.module.css";

const MovieItemContainer = ({ children }) => {
  return <li className={styles.Moviecontainer}>{children}</li>;
};

export default MovieItemContainer;
