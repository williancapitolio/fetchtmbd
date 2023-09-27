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
  const [btnAddVote, setBtnAddVote] = useState("Adicionar Avaliação");
  const [btnRemoveVote, setBtnRemoveVote] = useState("Remover Avaliação");

  const { addRating, deleteRating } = useRating();

  const handleSubmit = async (ev: React.SyntheticEvent) => {
    ev.preventDefault();

    try {
      if (ratingAction === "add") {
        setBtnAddVote("Adicionando...");

        const res = await addRating(id, vote);

        if (res) setBtnAddVote("Adicionar Avaliação");
      } else if (ratingAction === "delete") {
        setBtnRemoveVote("Removendo...");

        await deleteRating(id);
      }
    } catch (error) {
      console.log(error);
      setBtnAddVote("Tentar novamente");
      setBtnRemoveVote("Tentar novamente");
    }
  };

  if (ratingAction === "add") {
    return (
      <form onSubmit={handleSubmit} className={styles.wrapper}>
        <label htmlFor="rate" className={styles.wrapperLabel}>
          Avaliar de 0 a 10
        </label>
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
        <button className={styles.wrapperBtn}>{btnAddVote}</button>
      </form>
    );
  } else if (ratingAction === "delete") {
    return (
      <>
        <form onSubmit={handleSubmit} className={styles.wrapper}>
          <span className={styles.wrapperVote}>Minha Avaliação: {rating}</span>
          <button className={styles.wrapperBtn}>{btnRemoveVote}</button>
        </form>
      </>
    );
  }
};
