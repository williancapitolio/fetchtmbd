import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import { FormVote } from "../FormVote";

import { IMovie } from "../../types/MoviesType";

import styles from "./Card.module.scss";

import noImg from "../../public/img/noimg.jpg";

type CardType = {
  ratingAction: "add" | "delete" | "";
} & IMovie;

export const Card = ({
  id,
  poster_path,
  title,
  rating,
  vote_average,
  ratingAction,
}: CardType) => {
  const [posterPath, setPosterPath] = useState<string>(
    `${import.meta.env.VITE_IMG_MD}${poster_path}`
  );

  useEffect(() => {
    if (!poster_path.includes("/")) {
      setPosterPath(noImg);
    }
  }, [poster_path]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperImg}>
        <img src={posterPath} alt={title} className={styles.wrapperImgBanner} />
      </div>
      <div className={styles.wrapperContent}>
        <h3 className={styles.wrapperContentTitle}>{title}</h3>
        {poster_path ? (
          <span className={styles.wrapperContentVotes}>
            Média de Avaliações: {vote_average.toFixed(1)}
          </span>
        ) : (
          <span className={styles.wrapperContentVotes}>
            Média de Avaliações: N/A
          </span>
        )}
        <div className={styles.wrapperContentForm}>
          <FormVote id={id} rating={rating} ratingAction={ratingAction} />
        </div>
        {poster_path && (
          <Link to={`/`} className={styles.wrapperContentDetails}>
            <button className={styles.wrapperContentDetailsBtn}>
              Detalhes
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
