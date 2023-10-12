import { LoaderFunctionArgs } from "react-router-dom";

import { IMovie } from "../types/MoviesType";

export const movieDetailsLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<IMovie> => {
  const url = `${import.meta.env.VITE_URL_MOVIE_DETAILS}${
    params.movie_id
  }?language=pt-BR&api_key=${import.meta.env.VITE_API_KEY}`;
  const options = { method: "GET", headers: { accept: "application/json" } };

  const res = await fetch(url, options);

  if (!res.ok) throw new Error("Something went wrong...");

  const movie = await res.json();

  return movie;
};
