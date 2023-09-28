import styles from "./Toast.module.scss";

export const Toast = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperContent}>
        <div className={styles.wrapperContentDiv}>
          <p className={styles.wrapperContentDivType}>Sucesso!</p>
          <span className={styles.wrapperContentDivMsg}>Filme avaliado!</span>
        </div>
        <span className={styles.wrapperContentClose}>&times;</span>
      </div>
    </div>
  );
};
