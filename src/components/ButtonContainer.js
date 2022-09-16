import styles from "../components/ButtonContainer.module.css";

const ButtonContainer = ({ children }) => {
  return <div className={styles.ButtonContainer}>{children}</div>;
};

export default ButtonContainer;
