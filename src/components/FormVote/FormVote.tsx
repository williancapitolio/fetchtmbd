import { useState } from "react";
import { useRating } from "../../hooks/useRating";

type FormVoteType = {
  id: number;
  rating: string;
};

export const FormVote = ({ id, rating }: FormVoteType) => {
  const [vote, setVote] = useState(0);

  const { addRating, deleteRating } = useRating();

  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();

    if (rating === "add") addRating(id, vote);
    else if (rating === "delete") deleteRating(id);
  };

  if (rating === "add") {
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
    )
  } else if (rating === "delete") {
    return (
      <>
      {/* <span>Minha Avaliação: {vote}</span> */}
      <form onSubmit={handleSubmit}>
        <button>Remover Avaliação</button>
      </form>
      </>
    )
  }
};
