import styles from "./Pagination.module.scss";

type PaginationType = {
  page: number;
  handleClickPagination: (ev: React.SyntheticEvent) => void;
  isFirstDisabled: boolean;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  isLastDisabled: boolean;
};

export const Pagination = ({
  page,
  handleClickPagination,
  isFirstDisabled,
  isPrevDisabled,
  isNextDisabled,
  isLastDisabled,
}: PaginationType) => {
  return (
    <section className={styles.wrapper}>
      <button
        id="first"
        onClick={handleClickPagination}
        disabled={isFirstDisabled}
        className={`${styles.wrapperBtn} ${
          isFirstDisabled ? styles.disabledBtn : ""
        }`}
      >
        &laquo;
      </button>
      <button
        id="prev"
        onClick={handleClickPagination}
        disabled={isPrevDisabled}
        className={`${styles.wrapperBtn} ${
          isPrevDisabled ? styles.disabledBtn : ""
        }`}
      >
        &lsaquo;
      </button>
      <span className={styles.wrapperIndicator}>
        <span className={styles.wrapperIndicatorNumber}>{page}</span>
      </span>
      <button
        id="next"
        onClick={handleClickPagination}
        disabled={isNextDisabled}
        className={`${styles.wrapperBtn} ${
          isNextDisabled ? styles.disabledBtn : ""
        }`}
      >
        &rsaquo;
      </button>
      <button
        id="last"
        onClick={handleClickPagination}
        disabled={isLastDisabled}
        className={`${styles.wrapperBtn} ${
          isLastDisabled ? styles.disabledBtn : ""
        }`}
      >
        &raquo;
      </button>
    </section>
  );
};
