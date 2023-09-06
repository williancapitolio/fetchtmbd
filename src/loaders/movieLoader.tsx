import { MoviesType } from "../types/MoviesType";

export const movieLoader = async (): Promise<MoviesType> => {
  const url: string = import.meta.env.VITE_URL;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_TOKEN,
    },
  };

  const results = await fetch(url, options);

  if (!results.ok) throw new Error("Something went wrong...");

  const movies = await results.json();

  return { movies };
};
