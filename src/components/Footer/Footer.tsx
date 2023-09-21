import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <a href="https://github.com/williancapitolio/fetchtmbd" target="_blank" className={styles.wrapperLink}>
        FetchTMDB
      </a>
      <a href="https://github.com/williancapitolio" target="_blank" className={styles.wrapperLink}>
        GitHub
      </a>
    </div>
  );
};
