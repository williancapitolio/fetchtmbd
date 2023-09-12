import { useState } from "react";

import { IMovie } from "../../types/MoviesType";

export const Card = ({ poster_path, title, vote_average }: IMovie) => {
  const [vote, setVote] = useState(0);

  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    console.log(vote)
  };

  return (
    <div>
      <img src={`${import.meta.env.VITE_IMG_MD}${poster_path}`} alt={title} />
      <h3>{title}</h3>
      <span>{vote_average}</span>
      <form onSubmit={handleSubmit}>
        <label htmlFor="vote">Avaliar</label>
        <input
          id="vote"
          type="range"
          min={0}
          max={10}
          step={0.1}
          value={vote}
          onChange={(ev) => setVote(+ev.target.value)}
        />
        <span>{vote}</span>
        <button>Enviar</button>
      </form>
    </div>
  );
};
