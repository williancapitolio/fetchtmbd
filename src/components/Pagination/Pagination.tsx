import styles from "./Pagination.module.scss";

type PaginationType = {
  page: number;
  handleClickPagination: (ev: React.SyntheticEvent) => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
};

export const Pagination = ({
  page,
  handleClickPagination,
  isPrevDisabled,
  isNextDisabled,
}: PaginationType) => {
  return (
    <section className={styles.wrapper}>
      <button
        id="prev"
        onClick={handleClickPagination}
        disabled={isPrevDisabled}
        className={`${styles.wrapperBtn} ${isPrevDisabled ? styles.disabledBtn : ""}`}
      >
        &#60;
      </button>
      <span className={styles.wrapperIndicator}>
        <span className={styles.wrapperIndicatorNumber}>{page}</span>
      </span>
      <button
        id="next"
        onClick={handleClickPagination}
        disabled={isNextDisabled}
        className={`${styles.wrapperBtn} ${isNextDisabled ? styles.disabledBtn : ""}`}
      >
        &#62;
      </button>
    </section>
  );
};