import { useEffect, useState } from "react";

/* import { useLoaderData } from "react-router-dom"; */

import { ratedMoviesLoader } from "../../loaders/ratedMoviesLoader";

import { Card } from "../../components/Card";

import { IMovie /* , MoviesType */ } from "../../types/MoviesType";

import styles from "./RatedMovies.module.scss";

export const RatedMovies = () => {
  const [ratedMoviesList, setRatedMoviesList] = useState<[] | IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  /* const { movies } = useLoaderData() as MoviesType; */

  const getAllRatedMovies = async () => {
    const { movies } = await ratedMoviesLoader();

    setRatedMoviesList(movies.results);

    setIsLoading(false);
  };

  useEffect(() => {
    getAllRatedMovies();
  }, [ratedMoviesList]);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.wrapperTitle}>Filmes Avaliados</h1>
      {isLoading ? (
        <h2>Buscando...</h2>
      ) : (
        <section className={styles.wrapperMovies}>
          {ratedMoviesList.length > 0 ? (
            ratedMoviesList
              .sort((a, b) => b.vote_average - a.vote_average)
              .map(({ id, poster_path, rating, title, vote_average }) => (
                <Card
                  key={id}
                  id={id}
                  poster_path={poster_path ? poster_path : ""}
                  rating={rating}
                  title={title}
                  vote_average={vote_average}
                  ratingAction="delete"
                />
              ))
          ) : (
            <Card
              id={0}
              poster_path={""}
              rating={0}
              title={"Nenhum filme avaliado"}
              vote_average={0}
              ratingAction=""
            />
          )}
        </section>
      )}
    </section>
  );
};
