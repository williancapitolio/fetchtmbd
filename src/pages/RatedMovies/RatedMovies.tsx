import { useEffect, useState } from "react";

/* import { useLoaderData } from "react-router-dom"; */

import { Card } from "../../components/Card";

import { IMovie /* , MoviesType */ } from "../../types/MoviesType";
import { ratedMoviesLoader } from "../../loaders/ratedMoviesLoader";

export const RatedMovies = () => {
  const [ratedMoviesList, setRatedMoviesList] = useState<[] | IMovie[]>([]);

  /* const { movies } = useLoaderData() as MoviesType; */

  const getAllRatedMovies = async () => {
    const { movies } = await ratedMoviesLoader();

    setRatedMoviesList(movies.results);
  };

  useEffect(() => {
    getAllRatedMovies();
  }, [ratedMoviesList]);

  return (
    <>
      <h1>Filmes Avaliados</h1>
      {ratedMoviesList.length > 0 ? (
        ratedMoviesList
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
