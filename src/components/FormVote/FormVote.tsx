import { useState } from "react";

import { useRating } from "../../hooks/useRating";

import styles from "./FormVote.module.scss";

type FormVoteType = {
  id: number;
  rating: number;
  ratingAction: string;
};

export const FormVote = ({ id, rating, ratingAction }: FormVoteType) => {
  const [vote, setVote] = useState(0.5);

  const { addRating, deleteRating } = useRating();

  const handleSubmit = async (ev: React.SyntheticEvent) => {
    ev.preventDefault();

    if (ratingAction === "add") await addRating(id, vote);
    else if (ratingAction === "delete") await deleteRating(id);
  };

  if (ratingAction === "add") {
    return (
      <form onSubmit={handleSubmit} className={styles.wrapper}>
        <label htmlFor="rate" className={styles.wrapperLabel}>Avaliar de 0 a 10</label>
        <input
          id="rate"
          type="range"
          min={0.5}
          max={10.0}
          step={0.5}
          value={vote}
          onChange={(ev) => setVote(+ev.target.value)}
          className={styles.wrapperRange}
        />
        <span className={styles.wrapperVote}>{vote}</span>
        <button className={styles.wrapperBtn}>Adicionar Avaliação</button>
      </form>
    );
  } else if (ratingAction === "delete") {
    return (
      <>
        <form onSubmit={handleSubmit} className={styles.wrapper}>
          <span className={styles.wrapperVote}>Minha Avaliação: {rating}</span>
          <button className={styles.wrapperBtn}>Remover Avaliação</button>
        </form>
      </>
    );
  }
};
