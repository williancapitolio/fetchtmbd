import { LoaderFunctionArgs } from "react-router-dom";

import { MoviesType } from "../types/MoviesType";

export const searchedMoviesLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<MoviesType> => {
  if (!params) throw new Error("Something went wrong...");

  const url = `https://api.themoviedb.org/3/search/movie?language=pt-BR&api_key=981b9f0c15739d4fff4d829853f4dce8&query=${params.query}`;
  const options = { method: "GET", headers: { accept: "application/json" } };

  const results = await fetch(url, options);

  if (!results.ok) throw new Error("Something went wrong...");

  const movies = await results.json();

  return { movies };
};
