import { useLoaderData } from "react-router-dom";

import { IMovie } from "../../types/MoviesType";

import styles from "./MovieDetails.module.scss";

export const MovieDetails = () => {
  const { poster_path, title, vote_average, backdrop_path, overview, runtime } =
    useLoaderData() as IMovie;

  return (
    <section className={styles.wrapper}>
      <section
        className={styles.wrapperBg}
        style={{
          background: `url(${
            import.meta.env.VITE_BACKDROP_PATH
          }${backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "100% 50%",
          width: "100vw",
          height: "100vh",
        }}
      ></section>
      <h1 className={styles.wrapperTitle}>{title}</h1>
      <section className={styles.wrapperDetails}>
        <section className={styles.wrapperDetailsCard}>
          <section className={styles.wrapperDetailsCardFolder}>
            <img
              src={`${import.meta.env.VITE_IMG_MD}${poster_path}`}
              alt={`Poster ${title}`}
            />
          </section>
          <section className={styles.wrapperDetailsCardData}>
            <p className={styles.wrapperDetailsCardDataDesc}>{overview}</p>
            <span>Duração: {runtime} minutos.</span>
            <span>{vote_average.toFixed(1)}</span>
          </section>
        </section>
      </section>
    </section>
  );
};
