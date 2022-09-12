import styles from "../components/MovieContentWrapper.module.css";

const MovieContentWrapper = (props) => {
  return <section className={styles.Wrapper}>{props.children}</section>;
};

export default MovieContentWrapper;
