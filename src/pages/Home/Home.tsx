/* import { useLoaderData } from "react-router-dom"; */

import { useEffect, useState } from "react";

import { Card } from "../../components/Card";
import { Pagination } from "../../components/Pagination";

import {
  MoviesTypeNowPlaying /* , MoviesType */,
} from "../../types/MoviesType";

import styles from "./Home.module.scss";

export const Home = () => {
  /* const { movies } = useLoaderData() as MoviesType; */
  const [movies, setMovies] = useState<MoviesTypeNowPlaying>({ results: [] });
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<number>(1);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const fetchMovies = async (page: number): Promise<MoviesTypeNowPlaying> => {
    const url: string = `${import.meta.env.VITE_URL_NOW_PLAYING}${page}`;
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

  const handleClickPagination = (ev: React.SyntheticEvent) => {
    if (ev.currentTarget.id === "prev") {
      setPage(page - 1);
    } else if (ev.currentTarget.id === "next") {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    page === 1 ? setIsPrevDisabled(true) : setIsPrevDisabled(false);
    page === 5 ? setIsNextDisabled(true) : setIsNextDisabled(false);

    const getMoviesList = async () => {
      setMovies(await fetchMovies(page));
      setLoading(false);
      scrollTo({ top: 0, behavior: "smooth" });
    };

    getMoviesList();
  }, [page]);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.wrapperTitle}>Filmes em Cartaz</h1>
      {loading && <h2>Buscando...</h2>}
      <section className={styles.wrapperMovies}>
        {movies.results
          .sort((a, b) => b.vote_average - a.vote_average)
          .map(({ id, poster_path, rating, title, vote_average }) => (
            <Card
              key={id}
              id={id}
              poster_path={poster_path ? poster_path : ""}
              rating={rating}
              title={title}
              vote_average={vote_average}
              ratingAction="add"
            />
          ))}
      </section>
      <Pagination
        page={page}
        handleClickPagination={handleClickPagination}
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
      />
    </section>
  );
};
