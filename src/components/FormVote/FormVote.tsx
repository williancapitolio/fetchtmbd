import { useState } from "react";

export const FormVote = () => {
  const [vote, setVote] = useState(0);

  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    console.log(vote);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="rate">Avaliar de 0 a 10</label>
      <input
        id="rate"
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
