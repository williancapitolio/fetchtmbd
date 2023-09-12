import { FormVote } from "../FormVote";

import { IMovie } from "../../types/MoviesType";

export const Card = ({ poster_path, title, vote_average }: IMovie) => {
  return (
    <div>
      <img src={`${import.meta.env.VITE_IMG_MD}${poster_path}`} alt={title} />
      <h3>{title}</h3>
      <span>{vote_average}</span>
      <FormVote />
    </div>
  );
};
