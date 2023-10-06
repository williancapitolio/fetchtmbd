/* import { useLoaderData } from "react-router-dom"; */

import { useEffect, useState } from "react";

import { Card } from "../../components/Card";

import {
  MoviesTypeNowPlaying /* , MoviesType */,
} from "../../types/MoviesType";

import styles from "./Home.module.scss";

export const Home = () => {
  /* const { movies } = useLoaderData() as MoviesType; */
  const [movies, setMovies] = useState<MoviesTypeNowPlaying>({ results: [] });
  const [loading, setLoading] = useState(true);

  const fetchMovies = async (): Promise<MoviesTypeNowPlaying> => {
    const url: string = `${import.meta.env.VITE_URL_NOW_PLAYING}`;
    /* const token: string = import.meta.env.VITE_TOKEN; */

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        /* Authorization: token, */
      },
    };

    const res = await fetch(url, options)
      .then((data) => data.json())
      .then((res) => res);
      
    return res;
  };

  const getMoviesList = async () => {
    const data = await fetchMovies();
    if (!data) throw new Error("erro");
    setMovies(data);
    setLoading(false);
  };

  useEffect(() => {
    getMoviesList();
  }, []);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.wrapperTitle}>Filmes em Cartaz</h1>
      {loading && <h2>Carregando...</h2>}
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
