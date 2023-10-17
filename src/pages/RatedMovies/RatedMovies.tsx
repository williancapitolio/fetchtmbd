import { useLoaderData } from "react-router-dom";

import { Card } from "../../components/Card";

import styles from "./RatedMovies.module.scss";

import { MoviesType } from "../../types/MoviesType";

export const RatedMovies = () => {
  const { movies } = useLoaderData() as MoviesType;

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.wrapperTitle}>Filmes Avaliados</h1>
      <section className={styles.wrapperMovies}>
        {movies.results.length > 0 ? (
          movies.results
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
    </section>
  );
};
