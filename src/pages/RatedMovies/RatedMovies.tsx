/* import { useLoaderData } from "react-router-dom"; */

import { useEffect } from "react";

import { useRating } from "../../hooks/useRating";

import { Card } from "../../components/Card";

/* import { MoviesType } from "../../types/MoviesType"; */

export const RatedMovies = () => {
  /* const { movies } = useLoaderData() as MoviesType; */
  const { data, getDataRated } = useRating();

  useEffect(() => {
    getDataRated();
  }, []);

  return (
    <>
      <h1>Filmes Avaliados</h1>
      {data.length > 0 ? (
        data
          .sort((a, b) => b.vote_average - a.vote_average)
          .map(({ id, poster_path, rating, title, vote_average }) => (
            <Card
              key={id}
              id={id}
              poster_path={poster_path}
              rating={rating}
              title={title}
              vote_average={vote_average}
              ratingAction="delete"
            />
          ))
      ) : (
        <span>Nenhum filme avaliado</span>
      )}
    </>
  );
};
