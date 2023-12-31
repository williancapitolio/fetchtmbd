import { MoviesType } from "../types/MoviesType";

export const movieLoader = async (): Promise<MoviesType> => {
  const url: string = import.meta.env.VITE_URL_NOW_PLAYING;
  /* const token: string = import.meta.env.VITE_TOKEN; */

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      /* Authorization: token, */
    },
  };

  const results = await fetch(url, options);

  if (!results.ok) throw new Error("Something went wrong...");

  const movies = await results.json();

  return { movies };
};
