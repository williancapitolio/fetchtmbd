import { useLoaderData } from "react-router-dom";

import { Card } from "../../components/Card";

import { MoviesType } from "../../types/MoviesType";

export const Home = () => {
  const { movies } = useLoaderData() as MoviesType;

  return (
    <>
      <h1>Filmes em Cartaz</h1>
      {movies.results
        .sort((a, b) => b.vote_average - a.vote_average)
        .map(({ id, poster_path, title, vote_average }) => (
          <Card
            key={id}
            id={id}
            poster_path={poster_path}
            title={title}
            vote_average={vote_average}
          />
        ))}
    </>
  );
};
