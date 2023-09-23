import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import { FormVote } from "../FormVote";

import { IMovie } from "../../types/MoviesType";

import styles from "./Card.module.scss";

type CardType = {
  ratingAction: "add" | "delete";
} & IMovie;

export const Card = ({
  id,
  poster_path,
  title,
  rating,
  vote_average,
  ratingAction,
}: CardType) => {
  const [posterPath, setPosterPath] = useState("");

  const noImg =
    "https://triunfo.pe.gov.br/pm_tr430/wp-content/uploads/2018/03/sem-foto.jpg";

  useEffect(() => {
    if (poster_path.includes(noImg)) {
      setPosterPath(noImg);
    } else {
      setPosterPath(`${import.meta.env.VITE_IMG_MD}${poster_path}`);
    }
  }, [poster_path]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperImg}>
        <img src={posterPath} alt={title} className={styles.wrapperImgBanner} />
      </div>
      <div className={styles.wrapperContent}>
        <h3 className={styles.wrapperContentTitle}>{title}</h3>
        <span className={styles.wrapperContentVotes}>
          Média de Avaliações: {vote_average.toFixed(1)}
        </span>
        <div className={styles.wrapperContentForm}>
          <FormVote id={id} rating={rating} ratingAction={ratingAction} />
        </div>
        <Link to={`/`} className={styles.wrapperContentDetails}>
          <button className={styles.wrapperContentDetailsBtn}>Detalhes</button>
        </Link>
      </div>
    </div>
  );
};
