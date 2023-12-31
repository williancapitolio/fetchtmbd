import { useState } from "react";

import { useRating } from "../../hooks/useRating";

import { Toast } from "../Toast";

import styles from "./FormVote.module.scss";
import { useNavigate } from "react-router-dom";

type FormVoteType = {
  id: number;
  rating: number;
  ratingAction: string;
};

export const FormVote = ({ id, rating, ratingAction }: FormVoteType) => {
  const [vote, setVote] = useState(0.5);
  const [btnAddVote, setBtnAddVote] = useState("Adicionar Avaliação");
  const [toastManage, setToastManage] = useState<true | false>(false);
  const [btnRemoveVote, setBtnRemoveVote] = useState("Remover Avaliação");

  const navigate = useNavigate();

  const { addRating, deleteRating } = useRating();

  const handleSubmit = async (ev: React.SyntheticEvent) => {
    ev.preventDefault();

    try {
      if (ratingAction === "add") {
        setBtnAddVote("Adicionando...");

        const res = await addRating(id, vote);

        if (res) {
          setBtnAddVote("Adicionar Avaliação");

          setToastManage(true);
          setTimeout(() => {
            setToastManage(false);
          }, 1000 * 2);
        }
      } else if (ratingAction === "delete") {
        setBtnRemoveVote("Removendo...");

        await deleteRating(id);

        setTimeout(() => {
          navigate("/rated-movies");
        }, 1000 * 1);
      }
    } catch (error) {
      console.log(error);
      setBtnAddVote("Tentar novamente");
      setBtnRemoveVote("Tentar novamente");
    }
  };

  const handleClickClose = () => {
    setToastManage(false);
  };

  if (ratingAction === "add") {
    return (
      <>
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
        <Toast isOpen={toastManage} handleClickClose={handleClickClose} />
      </>
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
