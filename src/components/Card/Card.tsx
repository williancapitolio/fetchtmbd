import { FormVote } from "../FormVote";

import { IMovie } from "../../types/MoviesType";

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
  return (
    <div>
      <img src={`${import.meta.env.VITE_IMG_MD}${poster_path}`} alt={title} />
      <h3>{title}</h3>
      <span>Média de Avaliações: {vote_average.toFixed(1)}</span>
      <FormVote id={id} rating={rating} ratingAction={ratingAction} />
    </div>
  );
};
