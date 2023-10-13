import { useLoaderData } from "react-router-dom";

import { IMovie } from "../../types/MoviesType";

import styles from "./MovieDetails.module.scss";

export const MovieDetails = () => {
  const { poster_path, title, vote_average, backdrop_path, overview, runtime } =
    useLoaderData() as IMovie;

  const verifyVoteColor = (vote_average: number): string => {
    let voteColor: string = "";

    if (vote_average <= 2) voteColor += "#ff4545";
    else if (vote_average <= 4) voteColor += "#ffa534";
    else if (vote_average <= 6) voteColor += "#ffe234";
    else if (vote_average <= 8) voteColor += "#b7dd29";
    else if (vote_average > 8) voteColor += "#57e32c";
    else if (!vote_average) voteColor += "transparent";

    return voteColor;
  };

  return (
    <section className={styles.wrapper}>
      <section
        className={styles.wrapperBg}
        style={{
          background: backdrop_path
            ? `url(${import.meta.env.VITE_BACKDROP_PATH}${backdrop_path})`
            : "",
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
            <span
              className={styles.wrapperDetailsCardDataVote}
              style={{ backgroundColor: verifyVoteColor(vote_average) }}
            >
              {vote_average.toFixed(1)}
            </span>
          </section>
        </section>
      </section>
    </section>
  );
};
