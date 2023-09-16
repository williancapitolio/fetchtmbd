import { useState } from "react";
import { useRating } from "../../hooks/useRating";

type FormVoteType = {
  id: number;
  rating: number;
  ratingAction: string;
};

export const FormVote = ({ id, rating, ratingAction }: FormVoteType) => {
  const [vote, setVote] = useState(0.5);

  const { addRating, deleteRating } = useRating();

  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();

    if (ratingAction === "add") addRating(id, vote);
    else if (ratingAction === "delete") deleteRating(id);
  };

  if (ratingAction === "add") {
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="rate">Avaliar de 0 a 10</label>
        <input
          id="rate"
          type="range"
          min={0.5}
          max={10.0}
          step={0.5}
          value={vote}
          onChange={(ev) => setVote(+ev.target.value)}
        />
        <span>{vote}</span>
        <button>Adicionar Avaliação</button>
      </form>
    );
  } else if (ratingAction === "delete") {
    return (
      <>
        <span>Minha Avaliação: {rating}</span>
        <form onSubmit={handleSubmit}>
          <button>Remover Avaliação</button>
        </form>
      </>
    );
  }
};
