import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Link to={"/"}>FetchTMDB</Link>
      <span>Olá visitante!</span>
      <Link to={"rated-movies"}>Filmes Avaliados</Link>
    </div>
  );
};
