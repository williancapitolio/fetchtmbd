import styles from "./Toast.module.scss";

type ToastType = {
  isOpen: boolean;
  handleClickClose: () => void
};

export const Toast = ({ isOpen, handleClickClose }: ToastType) => {
  

  if (isOpen) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.wrapperContent}>
          <div className={styles.wrapperContentDiv}>
            <p className={styles.wrapperContentDivType}>Sucesso!</p>
            <span className={styles.wrapperContentDivMsg}>Filme avaliado!</span>
          </div>
          <span
            className={styles.wrapperContentClose}
            onClick={handleClickClose}
          >
            &times;
          </span>
        </div>
      </div>
    );
  }
};
