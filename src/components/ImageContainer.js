import styles from "../components/ImageContainer.module.css";

const ImageContainer = ({ imgSrc }) => {
  return (
    <div className={styles.imgContainer}>
      <img src={`${imgSrc}`}></img>
    </div>
  );
};

export default ImageContainer;
