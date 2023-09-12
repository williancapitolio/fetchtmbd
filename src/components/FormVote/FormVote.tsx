import { useState } from "react";

export const FormVote = () => {
  const [vote, setVote] = useState(0);

  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    console.log(vote);
  };

  return (
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
  );
};
