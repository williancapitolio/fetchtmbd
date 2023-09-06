import { useLoaderData } from "react-router-dom";

import { Card } from "../../components/Card";

import { MoviesType } from "../../types/MoviesType";

export const Home = () => {
  const { movies } = useLoaderData() as MoviesType;

  return (
    <>
      HOME
      {movies.results.map(({ id, poster_path, title, vote_average }) => (
        <Card
          key={id}
          poster_path={poster_path}
          title={title}
          vote_average={vote_average}
        />
      ))}
    </>
  );
};
