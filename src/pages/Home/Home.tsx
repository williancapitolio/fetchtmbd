import { useLoaderData } from "react-router-dom";

import { Card } from "../../components/Card";

import { MoviesType } from "../../types/MoviesType";

import styles from "./Home.module.scss"

export const Home = () => {
  const { movies } = useLoaderData() as MoviesType;

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.wrapperTitle}>Filmes em Cartaz</h1>
      <section className={styles.wrapperMovies}>
        {movies.results
          .sort((a, b) => b.vote_average - a.vote_average)
          .map(({ id, poster_path, rating, title, vote_average }) => (
            <Card
              key={id}
              id={id}
              poster_path={poster_path}
              rating={rating}
              title={title}
              vote_average={vote_average}
              ratingAction="add"
            />
          ))}
      </section>
    </section>
  );
};
