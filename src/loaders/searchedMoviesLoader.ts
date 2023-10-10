import { LoaderFunctionArgs } from "react-router-dom";

import { MoviesType } from "../types/MoviesType";

export const searchedMoviesLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<MoviesType> => {
  if (!params) throw new Error("Something went wrong...");

  const url = `${import.meta.env.VITE_URL_SEARCHED_MOVIES}${params.query}`;
  const options = { method: "GET", headers: { accept: "application/json" } };

  const results = await fetch(url, options);

  if (!results.ok) throw new Error("Something went wrong...");

  const movies = await results.json();

  return { movies };
};
