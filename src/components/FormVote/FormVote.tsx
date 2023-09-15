import { useState } from "react";
import { useRating } from "../../hooks/useRating";

type FormVoteType = {
  id: number;
};

export const FormVote = ({ id }: FormVoteType) => {
  const [vote, setVote] = useState(0);

  const { addRating } = useRating();

  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    addRating(id, vote);
  };

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
      <button>Enviar</button>
    </form>
  );
};
